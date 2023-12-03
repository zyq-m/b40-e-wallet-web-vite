import { useState, useEffect } from "react";
import Layout from "../../../../components/Layout";
import { useLocation } from "react-router-dom";
import DD_ListTransactions from "../../../../components/DD_ListTransactions";
import { getCafeTransactions } from "../../../../api/auth";

export default function CafeDetails() {
  const location = useLocation();
  const { state } = location;
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [total, setTotal] = useState(0);

  const transactions = state ? state.transactions : [];
  const cafeId = state ? state.cafeId : [];

  useState(() => {
    setFilteredTransactions(transactions);
  });

  useEffect(() => {
    const fetchCafeTransactions = async () => {
      if (cafeId) {
        try {
          const response = await getCafeTransactions(cafeId); // Fetch cafe transactions by ID from the API
          const cafeTransactions = response.data;

          setFilteredTransactions(cafeTransactions);

          const updatedTotal = cafeTransactions.reduce(
            (acc, transaction) => acc + parseFloat(transaction.amount),
            0
          );

          setTotal(updatedTotal);
        } catch (error) {
          console.error("Error fetching cafe transactions:", error);
        }
      }
    };

    fetchCafeTransactions();
  }, [cafeId]);

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

  const handleFindTransactions = () => {
    let updatedTransactions = [];

    if (!fromDate && !toDate) {
      updatedTransactions = transactions;
    } else {
      updatedTransactions = transactions.filter((transaction) => {
        const transactionDate = new Date(transaction.createdAt);
        return (
          (!fromDate || transactionDate >= new Date(fromDate)) &&
          (!toDate || transactionDate <= new Date(toDate))
        );
      });
    }

    setFilteredTransactions(updatedTransactions);

    const updatedTotal = updatedTransactions.reduce(
      (acc, transaction) => acc + parseFloat(transaction.amount),
      0
    );

    setTotal(updatedTotal);
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
        <h1 className="mb-6 text-3xl font-bold">(Details Cafe Transaction)</h1>
        <p className="mb-[30px] mt-3">({cafeId})</p>
        <div className="flex items-center justify-between gap-3 mb-3">
          <div>
            <DD_ListTransactions options={dropdownAllTransaction} />
            <button
              type="submit"
              className="py-2 px-5 inline-flex justify-center items-center rounded-md border border-transparent font-semibold bg-[#Ffd035] text-black hover:bg-[#E4be3c] focus:outline-none focus:ring-2 focus:ring-[#Ffd035] focus:ring-offset-2 transition-all text-sm"
            >
              Print
            </button>
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
              type="button"
              className="py-2 px-5 inline-flex justify-center items-center rounded-md border border-transparent font-semibold bg-[#Ffd035] text-black hover:bg-[#E4be3c] focus:outline-none focus:ring-2 focus:ring-[#Ffd035] focus:ring-offset-2 transition-all text-sm"
              onClick={handleFindTransactions}
            >
              Find
            </button>
          </div>
        </div>
        <div className="mt-4 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="w-full mx-auto text-center">
            <thead>
              <tr>
                <td className="w-[4rem]"></td>
                <td className="pb-[37px] font-medium text-left">Sender</td>
                <td className="pb-[37px] font-medium text-left">Date</td>
                <td className="pb-[37px] font-medium text-center">
                  Amount(RM)
                </td>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((transaction, index) => (
                  <tr className="text-gray-500" key={index}>
                    <td className="pb-6 pr-4 text-center">{index + 1}.</td>
                    <td className="pb-6 text-left">
                      {transaction.transaction?.matricNo}
                    </td>
                    <td className="pb-6 text-left">
                      {transaction?.transaction?.createdAt &&
                        `${formatDate(
                          transaction.transaction.createdAt
                        )} - ${formatTime(transaction.transaction.createdOn)}`}
                    </td>
                    <td className="pb-6 text-center">
                      {transaction.walletTransaction.amount}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="pb-6 text-center">
                    No Transactions Available
                  </td>
                </tr>
              )}

              <tr>
                <td className="pb-6 font-medium text-right" colSpan={3}>
                  Total
                </td>
                <td className="pb-6 font-medium text-center">{total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
