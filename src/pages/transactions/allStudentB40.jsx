import { useState, useEffect } from "react";

import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";
import { getStudentData } from "../../api/auth";

export default function AllStudentB40() {
  const navigate = useNavigate();
  const [studentTransactions, setStudentTransactions] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);

  const onTransaction = (matricNo) => {
    navigate(`/transactions/details/student/${matricNo}`, {
      state: { matricNo },
    });
  };

  useEffect(() => {
    fetchDataStudentTrans();
  }, []);

  const fetchDataStudentTrans = async () => {
    try {
      const response = await getStudentData();
      setStudentTransactions(response.data);
      setFilteredStudents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle search input and update filteredStudents state
  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();

    const filtered = studentTransactions.filter(
      (student) =>
        student.icNo.toLowerCase().includes(searchQuery) ||
        student.matricNo.toLowerCase().includes(searchQuery)
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
          placeholder="Search by IC Number/ Matric Number..."
        />

        <div className="mt-4 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="w-full mx-auto text-center">
            <thead>
              <tr>
                <td className="w-[4rem]"></td>
                <td className="text-left pb-[37px] font-medium">Student ID</td>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, index) => {
                if (student.b40 === true) {
                  return (
                    <tr key={index} className="text-gray-500">
                      <td className="pb-6 pr-4 text-center">{index + 1}.</td>
                      <td className="pb-6 text-left">
                        {student.icNo} ({student.matricNo})
                      </td>
                      <td className="pb-6">
                        <button
                          type="submit"
                          className=" py-2 px-5 inline-flex justify-center items-center rounded-md border border-transparent font-semibold bg-[#C5c5c5] text-black hover:bg-[#Aaaaaa] focus:outline-none focus:ring-2 focus:ring-[#C5c5c5] focus:ring-offset-2 transition-all text-sm"
                          onClick={() =>
                            onTransaction(student.matricNo, student.transaction)
                          }
                        >
                          Show Details
                        </button>
                      </td>
                    </tr>
                  );
                } else {
                  return null; // Or handle non-matching items differently if needed
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
