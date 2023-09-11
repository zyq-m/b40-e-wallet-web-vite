import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AddWallet() {
  const navigate = useNavigate();
  // Define state to manage user data
  const [users, setUsers] = useState([]);

  // Simulate fetching user data from an API or database
  useEffect(() => {
    const staticUserData = [
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

    setUsers(staticUserData);
  }, []);

  return (
    <Layout>
      <div className="items-center w-2/3 mt-4">
        <form>
          <input
            className="w-full px-2 py-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="Search for name, matric number or ic number"
          />
        </form>
        <div className="mt-6 font-medium">
          <p>
            Select All <input type="checkbox" />
          </p>
        </div>
        <div className="mt-4 p-4 pt-0 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="centertable">
            <thead>
              <tr>
                <th className="font-medium pt-[15px] pb-[15px] text-center w-[7%] ">
                  Select
                </th>
                <th className="font-medium pl-[15px] pt-[15px] pb-[15px] text-left">
                  Name
                </th>
                <th className="font-medium pt-[15px] pb-[15px] text-left">
                  Matric Number
                </th>
                <th className="font-medium pt-[15px] pb-[15px] text-left">
                  IC Number
                </th>
                <th className="font-medium pt-[15px] pb-[15px] text-center">
                  Balance(RM)
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((data, i) => {
                const { student_name, matric_no, ic_no, wallet_amount } = data;

                return (
                  <tr key={i}>
                    <td className="pb-6 text-center">
                      <input
                        id="hs-table-search-checkbox-2"
                        type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      />
                    </td>
                    <td className="pl-[15px] pb-6 text-left">{student_name}</td>
                    <td className="pb-6 text-left">{matric_no}</td>
                    <td className="pb-6 text-left">{ic_no}</td>
                    <td className="pb-6 text-center">{wallet_amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-6">
          <div className="w-[4rem] mr-2">
            <input
              className="w-full px-2 py-2 border border-gray-300 rounded-md"
              type="number"
            />
          </div>
          <button
            type="submit"
            onClick={() => navigate("/dashboard")}
            className="py-2 px-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#Ffd035] text-black hover:bg-[#E4be3c] focus:outline-none focus:ring-2 focus:ring-[#Ffd035] focus:ring-offset-2 transition-all text-sm"
          >
            Add Point
          </button>
        </div>
      </div>
    </Layout>
  );
}
