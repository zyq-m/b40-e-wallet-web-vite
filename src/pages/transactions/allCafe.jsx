import { useState, useEffect } from "react";

import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";
import DD_ListTransactions from "../../components/DD_ListTransactions";
import { getReport } from "../../api/auth";

export default function AllCafe() {
  const [cafeTransactions, setCafeTransactions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDataCafeTrans();
  }, []);

  const fetchDataCafeTrans = async () => {
    try {
      const response = await getReport();
      setCafeTransactions(response.data.transaction);
    } catch (error) {
      console.error(error);
    }
  };

  const calculateTotalTransactions = (transactions) => {
    return transactions.reduce((total) => total + 1, 0);
  };

  const calculateTotalAmount = (transactions) => {
    return transactions.reduce(
      (total, transaction) => total + parseInt(transaction.amount),
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
              <input type="date" />
            </span>
            <span className="py-2 px-3 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
              <label htmlFor="to" className="mr-2">
                To
              </label>
              <input type="date" />
            </span>
            <button
              type="submit"
              className="py-2 px-5 inline-flex justify-center items-center rounded-md border border-transparent font-semibold bg-[#Ffd035] text-black hover:bg-[#E4be3c] focus:outline-none focus:ring-2 focus:ring-[#Ffd035] focus:ring-offset-2 transition-all text-sm"
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
                <td className="pb-[37px] font-medium text-left">Cafe</td>
                <td className="pb-[37px] font-medium text-center">
                  Transaction
                </td>
                <td className="pb-[37px] font-medium text-center">Total(RM)</td>
              </tr>
            </thead>
            <tbody>
              {cafeTransactions.map((cafe, index) => (
                <tr key={cafe.id} className="text-gray-500">
                  <td className="pb-6 pr-4 text-center">{index + 1}</td>
                  <td className="pb-6 text-left">{cafe.cafeName}</td>
                  <td className="pb-6 text-center">
                    {cafe.totalTransaction}
                  </td>
                  <td className="pb-6 text-center">
                    {cafe.totalAmount}
                  </td>
                </tr>
              ))}
              <tr className="font-medium text-gray-500">
                <td colSpan={2} className="py-6 text-right">
                  Total
                </td>
                <td className="py-6 text-center">
                  {/* {calculateTotalTransactions(
                    cafeTransactions.flatMap((cafe) => cafe.totalTransaction)
                  )} */}
                </td>
                <td className="py-6 text-center">
                  {/* {calculateTotalAmount(
                    cafeTransactions.flatMap((cafe) => cafe.totalAmount)
                  )} */}
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
