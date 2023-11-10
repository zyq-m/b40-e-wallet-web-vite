import Layout from "../../../../components/Layout";
import { useLocation } from "react-router-dom";
import DD_ListTransactions from "../../../../components/DD_ListTransactions";

export default function CafeDetails() {
  const location = useLocation();
  const { state } = location;

  const transactions = state ? state.transactions : [];
  const cafeId = state ? state.cafeId : [];

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

  const total = transactions.reduce(
    (acc, transaction) => acc + parseFloat(transaction.amount),
    0
  );

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
                <td className="pb-[37px] font-medium text-left">Sender</td>
                <td className="pb-[37px] font-medium text-left">Date</td>
                <td className="pb-[37px] font-medium text-center">
                  Amount(RM)
                </td>
              </tr>
            </thead>
            <tbody>
              {transactions.length > 0 ? (
                transactions.map((transaction, index) => (
                  <tr className="text-gray-500" key={index}>
                    <td className="pb-6 pr-4 text-center">{index + 1}.</td>
                    <td className="pb-6 text-left">{transaction.matricNo}</td>
                    <td className="pb-6 text-left">
                      {formatDate(transaction.createdAt)} -{" "}
                      {formatTime(transaction.createdAt)}
                    </td>
                    <td className="pb-6 text-center">{transaction.amount}</td>
                  </tr>
                ))
              ) : (
                <td colSpan="4" className="pb-6 text-center">
                  No Transactions Available
                </td>
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
