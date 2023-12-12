import { useState, useEffect } from "react";
import Layout from "../../../../components/Layout";
import { useLocation } from "react-router-dom";
import { getStudentPointTransactions } from "../../../../api/auth";

export default function StudentB40DetailsPoints() {
  const location = useLocation();
  const { state } = location;
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const matricNo = state ? state.matricNo : [];

  useEffect(() => {
    const fetchStudentTransactions = async () => {
      if (matricNo) {
        try {
          const response = await getStudentPointTransactions(matricNo);
          const studentTransactions = response?.data;

          setFilteredTransactions(studentTransactions);
        } catch (error) {
          console.error("Error fetching student points:", error);
        }
      }
    };

    fetchStudentTransactions();
  }, [matricNo]);
  console.log("studentB40DetailsPoints");

  // Helper function to format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Helper function to format time
  const formatTime = (createdAt) => {
    const date = new Date(createdAt);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    const formattedHours = hours % 12 || 12;

    const formattedTime = `${formattedHours
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${amOrPm}`;
    return formattedTime;
  };

  return (
    <Layout>
      <div className="items-center w-2/3 my-6">
        <h1 className="text-3xl font-bold">Student Transaction Details</h1>
        <p className="mb-[30px] mt-3">({matricNo})</p>
        <div className="p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="w-full mx-auto text-center">
            <thead>
              <tr>
                <td className="w-[4rem]"></td>
                <td className="pb-[37px] font-medium text-left">Sender</td>
                <td className="pb-[37px] font-medium text-left">Date</td>
                <td className="pb-[37px] font-medium text-center">
                  Amount(Points)
                </td>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((transaction, index) => (
                  <tr className="text-gray-500" key={index}>
                    <td className="pb-6 pr-4 text-center">{index + 1}.</td>
                    <td className="pb-6 text-left">
                      {transaction.transaction.cafe.name}
                    </td>
                    <td className="pb-6 text-left">
                      {formatDate(transaction.transaction.createdAt)} -{" "}
                      {formatTime(transaction.transaction.createdOn)}
                    </td>
                    <td className="pb-6 text-center">
                      {transaction.transaction.pointTransaction.point.value}
                    </td>
                  </tr>
                ))
              ) : (
                <td colSpan="4" className="pb-6 text-center">
                  No Transactions Available
                </td>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
