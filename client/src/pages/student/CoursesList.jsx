import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import SearchBar from "../../components/student/SearchBar";

const CoursesList = () => {
  const { navigate } = useContext(AppContext);

  return (
    <>
      <div>
        <div>
          <div>
            <h1>Courses List</h1>
            <p className="text-gray-500">
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => navigate("/")}
              >
                Home
              </span>{" "}
              / <span>Courses List</span>
            </p>
          </div>
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default CoursesList;
