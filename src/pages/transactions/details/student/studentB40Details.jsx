import Layout from "../../../../components/Layout";

export default function StudentB40Details() {
  // Sample transaction data array
  const transactions = [
    {
      id: 1,
      cafe_name: "Cafe A",
      created_on: "2023-09-11",
      created_at: "14:30:00",
      amount: 50.0,
    },
    {
      id: 2,
      cafe_name: "Cafe B",
      created_on: "2023-09-10",
      created_at: "09:45:00",
      amount: 30.0,
    },
    // Add more transaction objects as needed
  ];

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

  return (
    <Layout>
      <div className="items-center w-2/3 my-6">
        <h1 className="text-3xl font-bold">Student Transaction Details</h1>
        <p className="mb-[30px] mt-3">(Name Student B40 and Matric)</p>
        <div className="p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="w-full mx-auto text-center">
            <thead>
              <tr>
                <td className="w-[4rem]"></td>
                <td className="pb-[37px] font-medium text-left">Recepient</td>
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
                    <td className="pb-6 text-left">{data.cafe_name}</td>
                    <td className="pb-6 text-left">
                      {formatDate(data.created_on)} -{" "}
                      {formatTime(data.created_at)}
                    </td>
                    <td className="pb-6 text-center">{data.amount}</td>
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
