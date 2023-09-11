import Layout from "../../components/Layout";

export default function StudentB40() {
  // Define local arrays for unsuspended and suspended students
  const unsuspendedStudents = [
    {
      student_name: "Ahmad Ali",
      matric_no: "123456",
      ic_no: "123-45-6789",
      wallet_amount: 500.0,
    },
    {
      student_name: "Siti Fatimah",
      matric_no: "456789",
      ic_no: "456-78-9012",
      wallet_amount: 300.0,
    },
    {
      student_name: "Razif Rahman",
      matric_no: "789012",
      ic_no: "789-01-2345",
      wallet_amount: 600.0,
    },
    // Add more student objects as needed
  ];

  const suspendedStudents = [
    {
      student_name: "Nora Abdullah",
      matric_no: "987654",
      ic_no: "987-65-4321",
      wallet_amount: 250.0,
    },
    {
      student_name: "Fauzi Hamzah",
      matric_no: "654321",
      ic_no: "654-32-1098",
      wallet_amount: 150.0,
    },
    {
      student_name: "Lina Lim",
      matric_no: "321098",
      ic_no: "321-09-8765",
      wallet_amount: 450.0,
    },
    // Add more student objects as needed
  ];
  return (
    <Layout>
      <div className="items-center w-2/3 mt-7 mb-7">
        <h1 className="mb-[30px] font-bold text-3xl">Students B40 Data</h1>
        <input
          className="w-full px-2 py-2 border border-gray-300 rounded-md"
          type="text"
          placeholder="Search for name, matric number or ic number"
        />
        {unsuspendedStudents.length > 0 && (
          <div className="mt-4 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
            <table className="w-full mx-auto text-center">
              <thead>
                <tr>
                  <th className="text-center w-[2rem] pb-[37px]"></th>
                  <th className="text-left pb-[37px] font-medium">Name</th>
                  <th className="text-left pb-[37px] font-medium">
                    Matric Number
                  </th>
                  <th className="text-left pb-[37px] font-medium">IC Number</th>
                  <th className="text-center pb-[37px] font-medium">
                    Balance(RM)
                  </th>
                  <th className="text-center pb-[37px] font-medium">
                    Account Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {unsuspendedStudents.map((data, i) => {
                  const { student_name, matric_no, ic_no, wallet_amount } =
                    data;

                  return (
                    <tr key={i} className="text-gray-500">
                      <td className="pb-6 pr-4 text-center">{i + 1}.</td>
                      <td className="pb-6 text-left">{student_name}</td>
                      <td className="pb-6 text-left">{matric_no}</td>
                      <td className="pb-6 text-left">{ic_no}</td>
                      <td className="pb-6 text-center">{wallet_amount}</td>
                      <td className="pb-6 text-center">
                        <button
                          type="button"
                          className="py-2 px-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#EE4B2B] text-white hover:bg-[#880808] focus:outline-none focus:ring-2 focus:ring-[#EE4B2B] focus:ring-offset-2 transition-all text-sm"
                        >
                          Suspend
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {suspendedStudents.length > 0 && (
          <div className="mt-4 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
            <h2 className="mb-4 text-lg font-bold">Suspended Students</h2>
            <table className="w-full mx-auto text-center">
              <thead>
                <tr>
                  <th className="text-center w-[2rem] pb-[37px]"></th>
                  <th className="text-left pb-[37px] font-medium">Name</th>
                  <th className="text-left pb-[37px] font-medium">
                    Matric Number
                  </th>
                  <th className="text-left pb-[37px] font-medium">IC Number</th>
                  <th className="text-center pb-[37px] font-medium">
                    Balance(RM)
                  </th>
                  <th className="text-center pb-[37px] font-medium">
                    Account Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {suspendedStudents.map((data, i) => {
                  const { student_name, matric_no, ic_no, wallet_amount } =
                    data;

                  return (
                    <tr key={i} className="text-gray-500">
                      <td className="pb-6 pr-4 text-center">{i + 1}.</td>
                      <td className="pb-6 text-left">{student_name}</td>
                      <td className="pb-6 text-left">{matric_no}</td>
                      <td className="pb-6 text-left">{ic_no}</td>
                      <td className="pb-6 text-center">{wallet_amount}</td>
                      <td className="pb-6 text-center">
                        <button
                          type="button"
                          className="py-2 px-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#289a1c] text-white hover:bg-[#16500f] focus:outline-none focus:ring-2 focus:ring-[#289a1c] focus:ring-offset-2 transition-all text-sm"
                        >
                          Unsuspend
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
}
