import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    courseTitle: { type: String, required: true },
    CourseDescription: { type: String, required: true },
    courseThumbnail: { type: String },
    coursePrice: { type: Number, required: true },
    isPublished: { type: Boolean, required: true },
    discount: { type: Number, required: true, min: 0, max: 100 },
    courseContent: [],
    courseRatings: [
      {
        userId: { type: String },
        rating: { type: Number, min: 1, max: 5 },
      },
    ],
    educator: { type: String, ref: "User", required: true },
    enrolledStudents: [{ type: String, ref: "User" }],
  },
  { timestamps: true, minimize: false }
);
