import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { 
  // getCafeData,
  getStudentData,  
  // suspendUser,
  // unsuspendUser,
  updateB40WalletAmount,
} from "../api/auth";

export default function TestingPut() {
  // const [cafe, setCafe] = useState([]);
  const [student, setStudent] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [pointsToAdd, setPointsToAdd] = useState(0)
  const [searchTerm, setSearchTerm] = useState("");
  const [selectAll, setSelectAll] = useState(false); // New state variable
  
  useEffect(() => {
    // fetchDataCafe();
    fetchDataStudent();
}, []);

// const fetchDataCafe = async () => {
//   try {
//       const response = await getCafeData();
//       setCafe(response.data);
//   } catch (error) {
//       console.error(error);
//   }
// };

const fetchDataStudent = async () => {
  try {
      const response = await getStudentData();
      setStudent(response.data);
  } catch (error) {
      console.error(error);
  }
}; 

// Function to handle "Select All" button click
const handleSelectAll = () => {
  if (selectAll) {
    // If "Select All" is already checked, uncheck all checkboxes
    setSelectedStudents([]);
  } else {
    // If "Select All" is not checked, select all checkboxes
    const allStudentIds = student
      .filter((studentItem) => studentItem.b40)
      .map((studentItem) => studentItem.matricNo);
    setSelectedStudents(allStudentIds);
  }
  setSelectAll(!selectAll);
};

const handleCheckboxChange = (studentId) => {
  setSelectedStudents((prevSelectedStudents) => {
    if (prevSelectedStudents.includes(studentId)) {
      return prevSelectedStudents.filter((id) => id !== studentId);
    } else {
      return [...prevSelectedStudents, studentId];
    }
  });
};

  // Function to add points to selected students
  const handleAddPoints = async () => {
    if (pointsToAdd <= 0 || selectedStudents.length === 0) {
      return; // No points to add or no students selected
    }

    try {
      // Iterate through selected students and add points to each
      for (const studentId of selectedStudents) {
        await updateB40WalletAmount(studentId, pointsToAdd);
      }

      // Clear selected students and points
      setSelectedStudents([]);
      setPointsToAdd(0);

      // Reset the "Select All" button to its initial state
      setSelectAll(false);

      // Refetch the student data to update the balances
      fetchDataStudent();
    } catch (error) {
      console.error("Error adding points:", error);
    }
  };

// Function to add points to selected students
// const handleAddPoints = async () => {
//   if (pointsToAdd <= 0 || selectedStudents.length === 0) {
//     return; // No points to add or no students selected
//   }

//   try {
//     // Iterate through selected students and add points to each
//     for (const studentId of selectedStudents) {
//       await updateB40WalletAmount(studentId, pointsToAdd);
//     }

//     // Clear selected students and points
//     setSelectedStudents([]);
//     setPointsToAdd(0);

//     // Refetch the student data to update the balances
//     fetchDataStudent();
//   } catch (error) {
//     console.error("Error adding points:", error);
//   }
// };

// Filter students based on search term
const filteredStudents = student.filter((studentItem) =>
studentItem.user.profile.name.toLowerCase().includes(searchTerm) ||
studentItem.matricNo.toLowerCase().includes(searchTerm) ||
studentItem.icNo.toLowerCase().includes(searchTerm)
);

//suspend user
// const handleSuspend = async (userId) => {
//   try {
//     await suspendUser(userId); // Suspend the user (active = false)
//     // await fetchDataCafe();
//     await fetchDataStudent();
//   } catch (error) {
//     console.error("Error suspending cafe:", error);
//     // Handle the error as needed.
//   }
// };

//unsuspend user
// const handleUnsuspend = async (userId) => {
//   try {
//     await unsuspendUser(userId); // Suspend the user (active = false)
//     // await fetchDataCafe();
//     await fetchDataStudent();
//   } catch (error) {
//     console.error("Error unsuspending cafe:", error);
//     // Handle the error as needed.
//   }
// };
    
   // Cafe Filter data for active and inactive status
  // const unsuspendedCafes = cafe.filter((cafeItem) => cafeItem.user.active);
  // const suspendedCafes = cafe.filter((cafeItem) => !cafeItem.user.active);

  // Filter data for active and inactive status
  // const unsuspendedStudents = student.filter((studentItem) => studentItem.user.active);
  // const suspendedStudents = student.filter((studentItem) => !studentItem.user.active);

  return (
    <Layout>
      {/* <h1 className="mb-[30px] font-bold text-3xl">Cafe Owners Data</h1>
      <div className="mt-8 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
        <table className="w-full mx-auto text-center">
          <thead>
            <tr>
              <th className="text-center w-[2rem] pb-[37px]"></th>
              <th className="text-center pb-[37px] font-medium">ID</th>
              <th className="text-center pb-[37px] font-medium">Name</th>
              <th className="text-center pb-[37px] font-medium">Account No</th>
              <th className="text-center pb-[37px] font-medium">User ID</th>
              <th className="text-center pb-[37px] font-medium">Active Status</th>
              <th className="text-center pb-[37px] font-medium">Account Action</th>
            </tr>
          </thead>
          <tbody>
            {unsuspendedCafes.map((cafeItem, index) => (
              <tr key={index} className="text-gray-500">
                <td className="pb-6 pr-4 text-center">{index + 1}.</td>
                <td className="pb-6 text-left">{cafeItem.id}</td>
                <td className="pb-6 text-left">{cafeItem.name}</td>
                <td className="pb-6 text-center">{cafeItem.accountNo}</td>
                <td className="pb-6 text-center">{cafeItem.userId}</td>
                <td className="pb-6 text-center">{cafeItem.user.active ? "Active" : "Inactive"}</td>
                <td>
                  <button
                    type="button"
                    className="py-2 px-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#EE4B2B] text-white hover:bg-[#880808] focus:outline-none focus:ring-2 focus:ring-[#EE4B2B] focus:ring-offset-2 transition-all text-sm"
                    onClick={() => handleSuspendCafe(cafeItem.userId)}
                  >
                    Suspend
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

        <div className="mt-8 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
        <div className="text-xl font-bold mb-2">Suspended Cafes</div>
        <table className="w-full mx-auto text-center">
          <thead>
            <tr>
              <th className="text-center w-[2rem] pb-[37px]"></th>
              <th className="text-center pb-[37px] font-medium">ID</th>
              <th className="text-center pb-[37px] font-medium">Name</th>
              <th className="text-center pb-[37px] font-medium">Account No</th>
              <th className="text-center pb-[37px] font-medium">User ID</th>
              <th className="text-center pb-[37px] font-medium">Active Status</th>
              <th className="text-center pb-[37px] font-medium">Account Action</th>
            </tr>
          </thead>
          <tbody>
            {suspendedCafes.map((cafeItem, index) => (
              <tr key={index} className="text-gray-500">
                <td className="pb-6 pr-4 text-center">{index + 1}.</td>
                <td className="pb-6 text-left">{cafeItem.id}</td>
                <td className="pb-6 text-left">{cafeItem.name}</td>
                <td className="pb-6 text-center">{cafeItem.accountNo}</td>
                <td className="pb-6 text-center">{cafeItem.userId}</td>
                <td className="pb-6 text-center">{cafeItem.user.active ? "Active" : "Inactive"}</td>
                <td>
                  <button
                    type="button"
                    className="py-2 px-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#289a1c] text-white hover:bg-[#16500f] focus:outline-none focus:ring-2 focus:ring-[#289a1c] focus:ring-offset-2 transition-all text-sm"
                    onClick={() => handleUnsuspendCafe(cafeItem.userId)}
                  >
                    Unsuspend
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
      {/* <h1 className="mb-[30px] font-bold text-3xl">Student Data</h1>
      <div className="mt-8 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
        <table className="w-full mx-auto text-center">
          <thead>
            <tr>
              <th className="text-center w-[2rem] pb-[37px]"></th>
              <th className="text-center pb-[37px] font-medium">Matric Number</th>
              <th className="text-center pb-[37px] font-medium">IC Number</th>
              <th className="text-center pb-[37px] font-medium">User ID</th>
              <th className="text-center pb-[37px] font-medium">B40 Student</th>
              <th className="text-center pb-[37px] font-medium">Active Status</th>
            </tr>
          </thead>
          <tbody>
            {student.map((studentItem, index) => (
              <tr key={index} className="text-gray-500">
                <td className="pb-6 pr-4 text-center">{index + 1}.</td>
                <td className="pb-6 text-left">{studentItem.matricNo}</td>
                <td className="pb-6 text-left">{studentItem.icNo}</td>
                <td className="pb-6 text-center">{studentItem.userId}</td>
                <td className="pb-6 text-center">{studentItem.b40 ? "Yes" : "No"}</td>
                <td className="pb-6 text-center">{studentItem.user.active ? "Active" : "Inactive"}</td>
                <td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div> */}
        <div className="items-center w-2/3 mt-7 mb-7">
        <form>
          <input
            className="w-full px-2 py-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="Search for name, matric number or ic number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Handle search term input
          />
        </form>
        <button
            type="button"
            className="py-2 mt-4 px-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#Ffd035] text-black hover:bg-[#E4be3c] focus:outline-none focus:ring-2 focus:ring-[#Ffd035] focus:ring-offset-2 transition-all text-sm"
            onClick={handleSelectAll}
          >
            {selectAll ? "Deselect All Student" : "Select All Student"}
          </button>
        <div className="mt-4 p-4 pt-0 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="w-full mx-auto text-center">
            <thead>
              <tr>
                <th className="font-medium pt-[15px] pb-[15px] text-center w-[7%] ">
                  Select
                </th>
                <th className="font-medium pl-[15px] pt-[15px] pb-[15px] text-left">
                  Name
                </th>
                <th className="font-medium pt-[15px] pb-[15px] text-left">
                  Matric Number
                </th>
                <th className="font-medium pt-[15px] pb-[15px] text-left">
                  IC Number
                </th>
                <th className="font-medium pt-[15px] pb-[15px] text-center">
                  Balance(RM)
                </th>
              </tr>
            </thead>
            <tbody>
            {filteredStudents.map((studentItem, index) => {
              if (studentItem.b40 === true) {
                return (
                <tr key={index} className="text-gray-500">
                  <td className="pb-6 text-center">
                  <input
                    type="checkbox"
                    checked={selectedStudents.includes(studentItem.matricNo)}
                    onChange={() => handleCheckboxChange(studentItem.matricNo)}
                  />

                  </td>
                  <td className="pb-6 text-left">{studentItem.user.profile.name}</td>
                  <td className="pb-6 text-left">{studentItem.matricNo}</td>
                  <td className="pb-6 text-left">{studentItem.icNo}</td>
                  <td className="pb-6 text-center">{studentItem.coupon.total}</td>
                </tr>
                );
              } else {
                return null; // Or handle non-matching items differently if needed
              }
            })}

            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-6">
          <div className="w-[4rem] mr-2">
          <input
            className="w-full px-2 py-2 border border-gray-300 rounded-md"
            type="number"
            value={pointsToAdd}
            onChange={(e) => setPointsToAdd(e.target.value)}
          />
          </div>
          <button
          type="button"
          className="py-2 px-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#Ffd035] text-black hover:bg-[#E4be3c] focus:outline-none focus:ring-2 focus:ring-[#Ffd035] focus:ring-offset-2 transition-all text-sm"
          onClick={handleAddPoints}
        >
            Add Point
          </button>
        </div>
      </div>
    </Layout>
  );
}