import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { assets, dummyDashboardData } from "../../assets/assets";
import Loading from "../../components/student/Loading";

const Dashboard = () => {
  const { currency } = useContext(AppContext);
  const [dashboardData, setDashboardData] = useState(null);

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return dashboardData ? (
    <div className="min-h-screen flex flex-col items-start justify-between gap-8 md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <div className="space-y-5">
        <div className="flex flex-wrap gap-5 items-center">
          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-64 h-28 rounded-md">
            <img src={assets.patients_icon} alt="patients_icon" />
            <div>
              <p className="text-2xl font-medium text-gray-600">
                {dashboardData.enrolledStudentsData.length}
              </p>
              <p className="text-base text-gray-500">Total Enrollments</p>
            </div>
          </div>
          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-64 h-28 rounded-md">
            <img src={assets.appointments_icon} alt="appointments_icon" />
            <div>
              <p className="text-2xl font-medium text-gray-600">
                {dashboardData.totalCourses}
              </p>
              <p className="text-base text-gray-500">Total Courses</p>
            </div>
          </div>
          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-64 h-28 rounded-md">
            <img src={assets.earning_icon} alt="earning_icon" />
            <div>
              <p className="text-2xl font-medium text-gray-600">
                {currency} {dashboardData.totalEarnings}
              </p>
              <p className="text-base text-gray-500">Total Earnings</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="pb-4 text-lg font-medium">Latest Enrollments</h2>
          <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-300 shadow">
            <div className="overflow-x-auto w-full">
              <table className="table-fixed md:table-auto w-full">
                {/* Table Header */}
                <thead className="bg-gray-100 text-gray-900 border-b border-gray-300 text-sm text-left">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-center hidden sm:table-cell w-12">
                      #
                    </th>
                    <th className="px-4 py-3 font-semibold w-1/3">
                      Student Name
                    </th>
                    <th className="px-4 py-3 font-semibold w-1/2">
                      Course Title
                    </th>
                  </tr>
                </thead>
                {/* Table Body */}
                <tbody className="text-sm text-gray-600">
                  {dashboardData.enrolledStudentsData.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-300 hover:bg-gray-50 transition"
                    >
                      <td className="px-4 py-3 text-center hidden sm:table-cell">
                        {index + 1}
                      </td>
                      <td className="px-4 py-3 flex items-center space-x-3 w-full">
                        <img
                          src={item.student.imageUrl}
                          alt="Profile"
                          className="w-9 h-9 rounded-full"
                        />
                        <span className="truncate w-full">
                          {item.student.name}
                        </span>
                      </td>
                      <td className="px-4 py-3 truncate w-full">
                        {item.courseTitle}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Dashboard;
