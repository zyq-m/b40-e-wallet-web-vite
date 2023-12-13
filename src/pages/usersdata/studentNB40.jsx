import Layout from "../../components/Layout";
import { getStudentData, suspendUser, unsuspendUser } from "../../api/auth";
import { useState, useEffect } from "react";

export default function StudentNB40() {
  const [students, setStudents] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // Fetch cafe data when the component mounts
    fetchDataStudent();
  }, []);

  const fetchDataStudent = async () => {
    try {
      const response = await getStudentData();
      setStudents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  //suspend user
  const handleSuspend = async (userId) => {
    try {
      await suspendUser(userId);
      await fetchDataStudent();
    } catch (error) {
      console.error("Error suspending students:", error);
    }
  };

  //unsuspend user
  const handleUnsuspend = async (userId) => {
    try {
      await unsuspendUser(userId);
      await fetchDataStudent();
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
      <div className="items-center w-2/3 mt-7 mb-7">
        <h1 className="mb-[30px] font-bold text-3xl">Students Non-B40 Data</h1>
        <input
          className="w-full px-2 py-2 border border-gray-300 rounded-md"
          type="text"
          placeholder="Search for Matric Number or IC Number"
          value={searchText}
          onChange={({ target }) => setSearchText(target.value)}
        />
        <div className="mt-4 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="w-full mx-auto text-center">
            <thead>
              <tr>
                <th className="text-center w-[2rem] pb-[37px]"></th>
                <th className="text-left pb-[37px] font-medium">
                  Matric Number
                </th>
                <th className="text-left pb-[37px] font-medium">IC Number</th>
                <th className="text-left pb-[37px] font-medium">Name</th>
                <th className="text-center pb-[37px] font-medium">
                  B40 Student
                </th>
                <th className="text-center pb-[37px] font-medium">
                  Active Status
                </th>
                <th className="text-center pb-[37px] font-medium">
                  Account Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUnsuspendedStudents
                .filter((studentItem) => studentItem.b40 === false) // Filter only where b40 is false
                .map((studentItem, index) => (
                  <tr key={index} className="text-gray-500">
                    <td className="pb-6 pr-4 text-center">{index + 1}.</td>
                    <td className="pb-6 text-left">{studentItem.matricNo}</td>
                    <td className="pb-6 text-left">{studentItem.icNo}</td>
                    <td className="pb-6 text-left">
                      {studentItem.user.profile.name}
                    </td>
                    <td className="pb-6 text-center">
                      {studentItem.b40 ? "Yes" : "No"}
                    </td>
                    <td className="pb-6 text-center">
                      {studentItem.user.active ? "Active" : "Inactive"}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="py-2 px-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#EE4B2B] text-white hover:bg-[#880808] focus:outline-none focus:ring-2 focus:ring-[#EE4B2B] focus:ring-offset-2 transition-all text-sm"
                        onClick={() => handleSuspend(studentItem.userId)}
                      >
                        Suspend
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <h2 className="mb-4 text-lg font-bold">Suspended Students</h2>
          <table className="w-full mx-auto text-center">
            <thead>
              <tr>
                <th className="text-center w-[2rem] pb-[37px]"></th>
                <th className="text-left pb-[37px] font-medium">
                  Matric Number
                </th>
                <th className="text-left pb-[37px] font-medium">IC Number</th>
                <th className="text-left pb-[37px] font-medium">Name</th>
                <th className="text-center pb-[37px] font-medium">
                  B40 Student
                </th>
                <th className="text-center pb-[37px] font-medium">
                  Active Status
                </th>
                <th className="text-center pb-[37px] font-medium">
                  Account Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredSuspendedStudents
                .filter((studentItem) => studentItem.b40 === false) // Filter only where b40 is true
                .map((studentItem, index) => (
                  <tr key={index} className="text-gray-500">
                    <td className="pb-6 pr-4 text-center">{index + 1}.</td>
                    <td className="pb-6 text-left">{studentItem.matricNo}</td>
                    <td className="pb-6 text-left">{studentItem.icNo}</td>
                    <td className="pb-6 text-left">
                      {studentItem.user.profile.name}
                    </td>
                    <td className="pb-6 text-center">
                      {studentItem.b40 ? "Yes" : "No"}
                    </td>
                    <td className="pb-6 text-center">
                      {studentItem.user.active ? "Active" : "Inactive"}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="py-2 px-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#289a1c] text-white hover:bg-[#16500f] focus:outline-none focus:ring-2 focus:ring-[#289a1c] focus:ring-offset-2 transition-all text-sm"
                        onClick={() => handleUnsuspend(studentItem.userId)}
                      >
                        Unsuspend
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
