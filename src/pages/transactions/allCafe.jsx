import { useState, useEffect } from "react";

import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";
import DD_ListTransactions from "../../components/DD_ListTransactions";
import { getReport, getReportTransaction, getReportPDF } from "../../api/auth";

export default function AllCafe() {
  const [cafeTransactions, setCafeTransactions] = useState([]);
  const [fromDate, setFromDate] = useState(""); // State to store 'from' date
  const [toDate, setToDate] = useState(""); // State to store 'to' date
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataCafeTrans = async () => {
      try {
        const response = await getReport();
        setCafeTransactions(response.data.transaction);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataCafeTrans();
  }, []);

  // Function to fetch data based on selected dates
  const fetchDataByDate = async () => {
    try {
      if (fromDate && toDate) {
        const response = await getReportTransaction(fromDate, toDate);
        if (
          response &&
          response.transaction &&
          response.transaction.length > 0
        ) {
          // Update state with the fetched data when available
          setCafeTransactions(response.transaction);
        } else {
          // Set cafeTransactions to an empty array to trigger "Transaction not found" message
          setCafeTransactions([]);
        }
      } else {
        console.error("Please select both From and To dates.");
      }
    } catch (error) {
      console.error(error);
      // Handle errors, such as network issues or API failures
      // Set cafeTransactions to an empty array to trigger "Transaction not found" message
      setCafeTransactions([]);
    }
  };

  // Handler for 'Find' button click
  const handleFindClick = () => {
    fetchDataByDate();
  };

  // Function to fetch PDF report based on selected dates
  const fetchPDFReport = async () => {
    try {
      if (fromDate && toDate) {
        // Fetch the HTML content using the getReportPDF function
        const htmlResponse = await getReportPDF(fromDate, toDate);

        // Open a new window and display the HTML content
        const printWindow = window.open("", "_blank");
        printWindow.document.write(htmlResponse);
      } else {
        console.error(
          "Please select both From and To dates for the PDF report."
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const calculateTotalTransactions = (transactions) => {
    return transactions.reduce(
      (total, cafe) => total + cafe.totalTransaction,
      0
    );
  };

  const calculateTotalAmount = (transactions) => {
    return transactions.reduce(
      (total, cafe) => total + parseFloat(cafe.totalAmount),
      0
    );
  };

  const dropdownAllTransaction = [
    "All",
    "Today",
    "This Week",
    "Month",
    "Custom",
  ];

  return (
    <Layout>
      <div className="items-center w-2/3 my-6">
        <h1 className="mb-[30px] font-bold text-3xl">
          Transactions List (All Cafe)
        </h1>
        <div className="flex items-center justify-between gap-3 mb-3">
          <div>
            <DD_ListTransactions options={dropdownAllTransaction} />
          </div>
          <div className="flex gap-2">
            <span className="py-2 px-3 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
              <label htmlFor="from" className="mr-2">
                From
              </label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </span>
            <span className="py-2 px-3 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
              <label htmlFor="to" className="mr-2">
                To
              </label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </span>
            <button
              type="submit"
              onClick={handleFindClick} // Call function to fetch data by date
              className="py-2 px-5 inline-flex justify-center items-center rounded-md border border-transparent font-semibold bg-[#Ffd035] text-black hover:bg-[#E4be3c] focus:outline-none focus:ring-2 focus:ring-[#Ffd035] focus:ring-offset-2 transition-all text-sm"
            >
              Find
            </button>
            <button
              type="submit"
              onClick={fetchPDFReport}
              className="py-2 px-5 inline-flex justify-center items-center rounded-md border border-transparent font-semibold bg-[#Ffd035] text-black hover:bg-[#E4be3c] focus:outline-none focus:ring-2 focus:ring-[#Ffd035] focus:ring-offset-2 transition-all text-sm"
            >
              Print
            </button>
          </div>
        </div>
        <div className="mt-4 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="w-full mx-auto text-center">
            <thead>
              <tr>
                <td className="w-[4rem]"></td>
                <td className="pb-[37px] font-medium text-left">Cafe</td>
                <td className="pb-[37px] font-medium text-left">Account No.</td>
                <td className="pb-[37px] font-medium text-left">Bank</td>
                <td className="pb-[37px] font-medium text-center">
                  Transaction
                </td>
                <td className="pb-[37px] font-medium text-center">Total(RM)</td>
              </tr>
            </thead>
            <tbody>
              {cafeTransactions.length > 0 ? (
                cafeTransactions.map((cafe, index) => (
                  <tr key={cafe.id} className="text-gray-500">
                    <td className="pb-6 pr-4 text-center">{index + 1}</td>
                    <td className="pb-6 text-left">{cafe.cafeName}</td>
                    <td className="pb-6 text-left">{cafe.accountNo}</td>
                    <td className="pb-6 text-left">{cafe.bank ?? "N/A"}</td>
                    <td className="pb-6 text-center">
                      {cafe.totalTransaction}
                    </td>
                    <td className="pb-6 text-center">{cafe.totalAmount}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-6 text-center text-gray-500">
                    Transaction not found
                  </td>
                </tr>
              )}
              <tr className="font-medium text-gray-500">
                <td colSpan={4} className="py-6 text-right">
                  Total
                </td>
                <td className="py-6 text-center">
                  {calculateTotalTransactions(cafeTransactions)}
                </td>
                <td className="py-6 text-center">
                  {calculateTotalAmount(cafeTransactions)}
                </td>
              </tr>
              <tr>
                <td colSpan={3}></td>
                <td className="text-center w-fit">
                  <button
                    type="submit"
                    onClick={() => navigate("/dashboard")}
                    className="mt-5 py-2 px-5 inline-flex justify-center items-center rounded-md border border-transparent font-semibold bg-[#Ffd035] text-black hover:bg-[#E4be3c] focus:outline-none focus:ring-2 focus:ring-[#Ffd035] focus:ring-offset-2 transition-all text-sm"
                  >
                    Mark as claimed
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
