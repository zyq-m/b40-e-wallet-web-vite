import Layout from "../../components/Layout";

export default function StudentB40() {
  // Define local arrays for unsuspended and suspended students
  const unsuspendedStudents = [
    {
      student_name: "Muhammad Abdullah",
      matric_no: "112233",
      ic_no: "901-23-4567",
      wallet_amount: 70.0,
    },
    {
      student_name: "Norazlina Hassan",
      matric_no: "445566",
      ic_no: "801-12-3456",
      wallet_amount: 30.0,
    },
    {
      student_name: "Faridah Ahmad",
      matric_no: "778899",
      ic_no: "701-01-2345",
      wallet_amount: 40.0,
    },
    // Add more student objects as needed
  ];

  const suspendedStudents = [
    {
      student_name: "Ali Bin Ismail",
      matric_no: "998877",
      ic_no: "601-23-4567",
      wallet_amount: 10.0,
    },
    {
      student_name: "Norazman Lim",
      matric_no: "554433",
      ic_no: "501-12-3456",
      wallet_amount: 55.0,
    },
    {
      student_name: "Aminah Binti Yusuf",
      matric_no: "112233",
      ic_no: "401-01-2345",
      wallet_amount: 38.0,
    },
    // Add more student objects as needed
  ];
  return (
    <Layout>
      <div className="items-center w-2/3 mt-7 mb-7">
        <h1 className="mb-[30px] font-bold text-3xl">Students Non-B40 Data</h1>
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
                    Balance(Point)
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
                    Balance(Point)
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
