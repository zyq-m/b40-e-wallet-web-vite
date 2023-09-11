import { useState } from "react";

import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";

export default function AllStudentB40() {
  const navigate = useNavigate();
  // Sample student data array
  const sampleStudentData = [
    {
      id: 1,
      student_name: "John Doe",
      matric_no: "ABC123",
    },
    {
      id: 2,
      student_name: "Jane Smith",
      matric_no: "XYZ789",
    },
    {
      id: 3,
      student_name: "Alice Johnson",
      matric_no: "DEF456",
    },
    {
      id: 4,
      student_name: "Bob Johnson",
      matric_no: "GHI789",
    },
    {
      id: 5,
      student_name: "Ella Davis",
      matric_no: "JKL012",
    },
    {
      id: 6,
      student_name: "Mike Wilson",
      matric_no: "MNO345",
    },
    // Add more student objects as needed
  ];

  // State to hold the filtered student data
  const [filteredStudents, setFilteredStudents] = useState(sampleStudentData);

  // Function to handle search input and update filteredStudents state
  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();

    // Filter students based on the search query
    const filtered = sampleStudentData.filter(
      (student) =>
        student.student_name.toLowerCase().includes(searchQuery) ||
        student.matric_no.toLowerCase().includes(searchQuery)
    );

    setFilteredStudents(filtered);
  };
  return (
    <Layout>
      <div className="items-center w-2/3 my-6">
        <h1 className="mb-[30px] font-bold text-3xl">
          Transactions List (Students B40)
        </h1>
        <input
          className="w-full px-2 py-2 border border-gray-300 rounded-md"
          type="text"
          onChange={handleSearch}
          placeholder="Search by Name/ Matric Number..."
        />

        <div className="mt-4 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="w-full mx-auto text-center">
            <thead>
              <tr>
                <td className="w-[4rem]"></td>
                <td className="text-left pb-[37px] font-medium">
                  Student Name
                </td>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((data, i) => {
                return (
                  <tr key={i} className="text-gray-500">
                    <td className="pb-6 pr-4 text-center">{i + 1}.</td>
                    <td className="pb-6 text-left">
                      {data.student_name} ({data.matric_no})
                    </td>
                    <td className="pb-6">
                      <button
                        type="submit"
                        onClick={() =>
                          navigate(
                            "/transactions/details/student/studentB40Details"
                          )
                        }
                        className=" py-2 px-5 inline-flex justify-center items-center rounded-md border border-transparent font-semibold bg-[#C5c5c5] text-black hover:bg-[#Aaaaaa] focus:outline-none focus:ring-2 focus:ring-[#C5c5c5] focus:ring-offset-2 transition-all text-sm"
                      >
                        Show Details
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
