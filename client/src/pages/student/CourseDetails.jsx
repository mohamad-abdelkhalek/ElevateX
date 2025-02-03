import React, { useContext, useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";

const CourseDetails = () => {
  const { id } = useParams();
  const { allCourses } = useContext(AppContext);

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
            dangerouslySetInnerHTML={{
              __html: truncateText(courseData.courseDescription, 200),
            }}
          ></p>
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
