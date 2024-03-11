import { useState } from "react";
import Layout from "./Layout";
import { suspendUser, unsuspendUser } from "../api/auth";

export default function StudentList({ title, students, loyalty, fetchData }) {
  const [searchText, setSearchText] = useState("");

  //suspend user
  const handleSuspend = async (userId) => {
    try {
      await suspendUser(userId);
      await fetchData();
    } catch (error) {
      console.error("Error suspending students:", error);
      // Handle the error as needed.
    }
  };

  //unsuspend user
  const handleUnsuspend = async (userId) => {
    try {
      await unsuspendUser(userId);
      await fetchData();
    } catch (error) {
      console.error("Error unsuspending students:", error);
    }
  };
  // Filter data for active and inactive status
  const unsuspendedStudents = students.filter(
    (studentItem) => studentItem.user.active
  );
  const suspendedStudents = students.filter(
    (studentItem) => !studentItem.user.active
  );

  // Filter data based on searchText
  const filteredUnsuspendedStudents = unsuspendedStudents.filter(
    (studentItem) => {
      const searchTerm = searchText.toLowerCase();
      return (
        studentItem.matricNo.toLowerCase().includes(searchTerm) ||
        studentItem.icNo.toLowerCase().includes(searchTerm)
      );
    }
  );

  const filteredSuspendedStudents = suspendedStudents.filter((studentItem) => {
    const searchTerm = searchText.toLowerCase();
    return (
      studentItem.matricNo.toLowerCase().includes(searchTerm) ||
      studentItem.icNo.toLowerCase().includes(searchTerm)
    );
  });
  return (
    <Layout>
      {students.length ? (
        <div className="items-center w-2/3 mt-7 mb-7">
          <h1 className="mb-[30px] font-bold text-3xl">{title}</h1>
          <input
            className="w-full px-2 py-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="Search for Matric Number or IC Number"
            value={searchText}
            onChange={({ target }) => setSearchText(target.value)}
          />
          <List
            filtered={filteredUnsuspendedStudents}
            loyalty={loyalty}
            onClick={handleSuspend}
          />
          <List
            filtered={filteredSuspendedStudents}
            loyalty={loyalty}
            onClick={handleUnsuspend}
          />
        </div>
      ) : (
        <h1 className="mb-[30px] font-bold text-3xl text-center">
          {title} Not Found
        </h1>
      )}
    </Layout>
  );
}

function List({ filtered, onClick, loyalty }) {
  return (
    <div className="mt-4 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
      <table className="w-full mx-auto text-center">
        <thead>
          <tr>
            <th className="text-center w-[2rem] pb-[37px]"></th>
            <th className="text-left pb-[37px] font-medium">Matric Number</th>
            <th className="text-left pb-[37px] font-medium">IC Number</th>
            <th className="text-left pb-[37px] font-medium">Name</th>
            <th className="text-center pb-[37px] font-medium">
              {loyalty ? "Point Collected(pt)" : "Balance E-Wallet(RM)"}
            </th>
            <th className="text-center pb-[37px] font-medium">Active Status</th>
            <th className="text-center pb-[37px] font-medium">
              Account Action
            </th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((studentItem, index) => (
            <tr key={index} className="text-gray-500">
              <td className="pb-6 pr-4 text-center">{index + 1}.</td>
              <td className="pb-6 text-left">{studentItem.matricNo}</td>
              <td className="pb-6 text-left">{studentItem.icNo}</td>
              <td className="pb-6 text-left">
                {studentItem.user.profile.name}
              </td>
              <td className="pb-6 text-center">{studentItem.coupon.total}</td>
              <td className="pb-6 text-center">
                {studentItem.user.active ? "Active" : "Inactive"}
              </td>
              <td>
                <button
                  type="button"
                  className="py-2 px-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#EE4B2B] text-white hover:bg-[#880808] focus:outline-none focus:ring-2 focus:ring-[#EE4B2B] focus:ring-offset-2 transition-all text-sm"
                  onClick={() => onClick(studentItem.userId)}
                >
                  {studentItem.user.active ? "Suspend" : "Unsuspend"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
