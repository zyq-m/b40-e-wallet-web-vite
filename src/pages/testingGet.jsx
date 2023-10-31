import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import {
  // getStudentData,
  // getCafeData,
  // getStudentTransactions,
  // getCafeTransactions,
  // getStudentPoints,
  getStudentTransactions,
} from "../api/auth";

export default function TestingGet() {
  // const [student, setStudent] = useState([]);
  // const [cafe, setCafe] = useState([]);
  const [studentTransactions, setStudentTransactions] = useState([]);
  // const [cafeTransactions, setCafeTransactions] = useState([]);
  // const [studentPoints, setStudentPoints] = useState([]);

  useEffect(() => {
    // fetchDataStudent();
    // fetchDataCafe();
    fetchDataStudentTrans();
    // fetchDataCafeTrans();
    // fetchDataStudentPoints();
  }, []);

  // const fetchDataStudent = async () => {
  //     try {
  //         const response = await getStudentData();
  //         setStudent(response.data);
  //     } catch (error) {
  //         console.error(error);
  //     }
  // };

  // const fetchDataCafe = async () => {
  //     try {
  //         const response = await getCafeData();
  //         setCafe(response.data);
  //     } catch (error) {
  //         console.error(error);
  //     }
  // };

  const fetchDataStudentTrans = async () => {
    try {
      const response = await getStudentTransactions();
      setStudentTransactions(response.data); // Access the 'transaction' array within the response
    } catch (error) {
      console.error(error);
    }
  };
  // const fetchDataCafeTrans = async () => {
  //     try {
  //         const response = await getCafeTransactions();
  //         setCafeTransactions(response.data[0].transaction);
  //     } catch (error) {
  //         console.error(error);
  //     }
  // };

  // const fetchDataStudentPoints = async () => {
  //     try {
  //         const response = await getStudentPoints();
  //         setStudentPoints(response.data[0].transaction);
  //     } catch (error) {
  //         console.error(error);
  //     }
  // };

  return (
    <Layout>
      {/* <div className="mt-4 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
                <h2 className="text-2xl font-bold mb-4">Student Data</h2>
                <table className="w-full mx-auto text-center">
                  <thead>
                    <tr>
                      <th className="text-center w-[2rem] pb-[37px]"></th>
                      <th className="text-center pb-[37px] font-medium">
                        Matric Number
                      </th>
                      <th className="text-center pb-[37px] font-medium">IC Number</th>
                      <th className="text-center pb-[37px] font-medium">
                        User ID
                      </th>
                      <th className="text-center pb-[37px] font-medium">
                        B40 Student
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {student.map((studentItem, index) => (
                      <tr key={index} className="text-gray-500">
                        <td className="pb-6 pr-4 text-center">{index + 1}.</td>
                        <td className="pb-6 text-left">{studentItem.matricNo}</td>
                        <td className="pb-6 text-left">{studentItem.icNo}</td>
                        <td className="pb-6 text-left">{studentItem.userId}</td>
                        <td className="pb-6 text-center">
                          {studentItem.b40 ? "Yes" : "No"}
                        </td>
                      </tr>
                  ))}
                  </tbody>
                </table>
            </div> */}

      {/* <div className="mt-8 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
                <h2 className="text-2xl font-bold mb-4">Cafe Data</h2>
                <table className="w-full mx-auto text-center">
                  <thead>
                    <tr>
                      <th className="text-center w-[2rem] pb-[37px]"></th>
                      <th className="text-center pb-[37px] font-medium">ID</th>
                      <th className="text-center pb-[37px] font-medium">Name</th>
                      <th className="text-center pb-[37px] font-medium">Account No</th>
                      <th className="text-center pb-[37px] font-medium">User ID</th>
                      <th className="text-center pb-[37px] font-medium">Active Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cafe.map((cafeItem, index) => (
                      <tr key={index} className="text-gray-500">
                        <td className="pb-6 pr-4 text-center">{index + 1}.</td>
                        <td className="pb-6 text-left">{cafeItem.id}</td>
                        <td className="pb-6 text-left">{cafeItem.name}</td>
                        <td className="pb-6 text-center">{cafeItem.accountNo}</td>
                        <td className="pb-6 text-center">{cafeItem.userId}</td>
                        <td className="pb-6 text-center">{cafeItem.user.active ? "Active" : "Inactive"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div> */}

      <div className="mt-8 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
        <h2 className="text-2xl font-bold mb-4">Student Transactions</h2>
        <table className="w-full mx-auto text-center">
          <thead>
            <tr>
              <th className="text-center w-[2rem] pb-[37px]">IC Number</th>
              <th className="text-center pb-[37px] font-medium">
                Matric Number
              </th>
              <th className="text-center pb-[37px] font-medium">
                Transactions
              </th>
            </tr>
          </thead>
          <tbody>
            {studentTransactions.map((student, index) => (
              <tr key={index} className="text-gray-500">
                <td className="pb-6 pr-4 text-center">{student.icNo}</td>
                <td className="pb-6 text-center">{student.matricNo}</td>
                <td className="pb-6 text-left">
                  {student.transaction.map((transaction, index) => (
                    <div key={index}>
                      <p>ID: {transaction.id}</p>
                      <p>Cafe ID: {transaction.cafeId}</p>
                      <p>Matric Number: {transaction.matricNo}</p>
                      <p>Amount: {transaction.amount}</p>
                      <p>Created At: {transaction.createdAt}</p>
                      <hr />
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="items-center w-2/3 my-6">
        <h1 className="mb-[30px] font-bold text-3xl">
          Transactions List (Students B40)
        </h1>
        <input
          className="w-full px-2 py-2 border border-gray-300 rounded-md"
          type="text"
          placeholder="Search by IC No. or Matric Number..."
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
              {studentTransactions.map((student, index) => (
                <tr key={index} className="text-gray-500">
                  <td className="pb-6 pr-4 text-center">{index + 1}.</td>
                  <td className="pb-6 text-left">
                    {student.icNo} ({student.matricNo})
                  </td>
                  <td className="pb-6">
                    <button
                      type="submit"
                      className=" py-2 px-5 inline-flex justify-center items-center rounded-md border border-transparent font-semibold bg-[#C5c5c5] text-black hover:bg-[#Aaaaaa] focus:outline-none focus:ring-2 focus:ring-[#C5c5c5] focus:ring-offset-2 transition-all text-sm"
                    >
                      Show Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className="mt-8 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
                <h2 className="text-2xl font-bold mb-4">Cafe Transactions</h2>
                <table className="w-full mx-auto text-center">
                  <thead>
                    <tr>
                      <th className="text-center w-[2rem] pb-[37px]">ID</th>
                      <th className="text-center pb-[37px] font-medium">Cafe ID</th>
                      <th className="text-center pb-[37px] font-medium">Matric Number</th>
                      <th className="text-center pb-[37px] font-medium">Amount</th>
                      <th className="text-center pb-[37px] font-medium">Created At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cafeTransactions.map((transaction, index) => (
                      <tr key={index} className="text-gray-500">
                        <td className="pb-6 pr-4 text-center">{transaction.id}</td>
                        <td className="pb-6 text-left">{transaction.cafeId}</td>
                        <td className="pb-6 text-left">{transaction.matricNo}</td>
                        <td className="pb-6 text-center">{transaction.amount}</td>
                        <td className="pb-6 text-center">{transaction.createdAt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
             </div>

             <div className="mt-8 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
                <h2 className="text-2xl font-bold mb-4">Student Points</h2>
                <table className="w-full mx-auto text-center">
                  <thead>
                    <tr>
                      <th className="text-center w-[2rem] pb-[37px]">ID</th>
                      <th className="text-center pb-[37px] font-medium">Cafe ID</th>
                      <th className="text-center pb-[37px] font-medium">Matric Number</th>
                      <th className="text-center pb-[37px] font-medium">Amount</th>
                      <th className="text-center pb-[37px] font-medium">Created At</th>
                      <th className="text-center pb-[37px] font-medium">
                        B40 Student
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentPoints.map((point, index) => (
                      <tr key={index} className="text-gray-500">
                        <td className="pb-6 pr-4 text-center">{point.id}</td>
                        <td className="pb-6 text-left">{point.cafeId}</td>
                        <td className="pb-6 text-left">{point.matricNo}</td>
                        <td className="pb-6 text-center">{point.amount}</td>
                        <td className="pb-6 text-center">{point.createdAt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div> */}
    </Layout>
  );
}
