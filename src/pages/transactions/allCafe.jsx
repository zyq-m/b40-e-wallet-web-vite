import { useState } from "react";

import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";
import DD_ListTransactions from "../../components/DD_ListTransactions";

export default function AllCafe() {
  const navigate = useNavigate();

  const dropdownAllTransaction = [
    "All",
    "Today",
    "This Week",
    "Month",
    "Custom",
  ];
  // Testing database
  const [cafe] = useState({
    transactions: [
      {
        cafe_name: "Restoran Abu Sakinah",
        total_transaction: 10,
        total_amount: 100,
      },
      {
        cafe_name: "Kafe Sabri Yaakob",
        total_transaction: 15,
        total_amount: 150,
      },
      // Add more data as needed
    ],
    overall: {
      sum_transaction: 25,
      sum_amount: 250,
    },
  });

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
              {cafe?.transactions?.map((data, i) => {
                return (
                  <tr key={i} className="text-gray-500">
                    <td className="pb-6 pr-4 text-center">{i + 1}.</td>
                    <td className="pb-6 text-left">{data.cafe_name}</td>
                    <td className="pb-6 text-center">
                      {data.total_transaction}
                    </td>
                    <td className="pb-6 text-center">{data.total_amount}</td>
                  </tr>
                );
              })}
              <tr className="font-medium text-gray-500">
                <td colSpan={2} className="py-6 text-right">
                  Total
                </td>
                <td className="py-6 text-center">
                  {cafe?.overall?.sum_transaction}
                </td>
                <td className="py-6 text-center">
                  {cafe?.overall?.sum_amount}
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
