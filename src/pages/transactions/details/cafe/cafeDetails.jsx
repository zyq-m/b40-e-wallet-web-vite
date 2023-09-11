import Layout from "../../../../components/Layout";
import DD_ListTransactions from "../../../../components/DD_ListTransactions";

export default function CafeDetails() {
  // Sample transaction data array
  const transactions = [
    {
      id: 1,
      student_name: "John Doe",
      sender: "Sender A",
      created_on: "2023-09-11",
      created_at: "14:30:00",
      amount: 50.0,
      cafe_name: "Cafe A",
    },
    {
      id: 2,
      student_name: "Jane Smith",
      sender: "Sender B",
      created_on: "2023-09-10",
      created_at: "09:45:00",
      amount: 30.0,
      cafe_name: "Cafe A",
    },
    // Add more transaction objects as needed
  ];

  const total = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  // Helper function to format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Helper function to format time
  const formatTime = (timeString) => {
    const options = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
    return new Date(`1970-01-01T${timeString}Z`).toLocaleTimeString(
      undefined,
      options
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
        <h1 className="mb-6 text-3xl font-bold">(Details Cafe Transaction)</h1>
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
              {transactions.map((data, i) => {
                return (
                  <tr className="text-gray-500" key={i}>
                    <td className="pb-6 pr-4 text-center">{i + 1}.</td>
                    <td className="pb-6 text-left">
                      {data.student_name} ({data.sender})
                    </td>
                    <td className="pb-6 text-left">
                      {formatDate(data.created_on)} -{" "}
                      {formatTime(data.created_at)}
                    </td>
                    <td className="pb-6 text-center">{data.amount}</td>
                  </tr>
                );
              })}
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
