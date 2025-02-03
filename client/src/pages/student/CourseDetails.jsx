import React, { useContext, useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";
import { assets } from "../../assets/assets";

const CourseDetails = () => {
  const { id } = useParams();
  const { allCourses, calculateRating } = useContext(AppContext);

  const courseData = useMemo(
    () => allCourses.find((course) => course._id === id),
    [id, allCourses]
  );

  const truncateText = (text, limit) => {
    if (!text) return "";
    if (text.length <= limit) return text;
    return text.substring(0, text.lastIndexOf(" ", limit)) + "…";
  };

  return courseData ? (
    <>
      <div
        className="flex md:flex-row flex-col-reverse gap-10 relative items-start 
    justify-between md:px-36 px-8 md:pt-[30px] pt-20 text-left"
      >
        {/* Background gradient */}
        <div
          className="absolute top-0 left-0 w-full h-[500px] z-[-1] 
      bg-gradient-to-b from-cyan-100/70"
        ></div>

        {/* Left Column */}
        <div className="max-w-xl z-10 text-gray-500">
          <h1 className="text-[26px] md:text-[44px] font-semibold text-gray-800">
            {courseData.courseTitle}
          </h1>

          <p
            className="pt-4 md:text-base text-sm"
            dangerouslySetInnerHTML={{
              __html: truncateText(courseData.courseDescription, 200),
            }}
          ></p>

          {/* review and ratings */}
          <div className="flex items-center space-x-2 pt-3 pb-1 text-sm">
            <p>{calculateRating(courseData)}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <img
                  className="w-3.5 h-3.5"
                  key={i}
                  src={
                    i < Math.floor(calculateRating(courseData))
                      ? assets.star
                      : assets.star_blank
                  }
                  alt="Star icon"
                />
              ))}
            </div>
            <p className="text-blue-600">
              ({courseData.courseRatings.length}{" "}
              {courseData.courseRatings.length > 1 ? "ratings" : "rating"})
            </p>

            <p>
              {courseData.enrolledStudents.length}{" "}
              {courseData.enrolledStudents.length > 1 ? "students" : "student"}{" "}
            </p>
          </div>

          <p className="text-sm">Course by <span className="text-blue-600 underline">ElevateX</span></p>
        </div>

        {/* Right Column */}
        <div>{/* Content goes here */}</div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default CourseDetails;
