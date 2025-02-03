import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const CourseDetails = () => {
  const { id } = useParams();

  const [courseData, setCourseData] = useState(null);

  const { allCourses } = useContext(AppContext);

  const fetchCourseData = async () => {
    const findCourse = allCourses.find((course) => course._id === id);
    setCourseData(findCourse);
  };

  useEffect(() => {
    fetchCourseData();
  }, []);

  return (
    <div>
      <h1>Course Details Page</h1>
    </div>
  );
};

export default CourseDetails;
