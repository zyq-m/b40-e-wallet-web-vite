import Layout from "../../components/Layout";

export default function Cafe() {
  // Sample data for unsuspended cafes
  const unsuspendedCafe = [
    {
      owner_name: "John Doe",
      username: "johndoe",
      cafe_name: "Doe's Cafe",
    },
    {
      owner_name: "Alice Smith",
      username: "alicesmith",
      cafe_name: "Alice's Coffee",
    },
    // Add more data as needed
  ];

  // Sample data for suspended cafes
  const suspendedCafe = [
    {
      owner_name: "Bob Johnson",
      username: "bobjohnson",
      cafe_name: "Bob's Brews",
    },
    // Add more data as needed
  ];

  return (
    <Layout>
      <div className="items-center w-2/3 mt-7 mb-7">
        <h1 className="mb-[30px] font-bold text-3xl">Cafe Owners Data</h1>
        <input
          className="w-full px-2 py-2 border border-gray-300 rounded-md"
          type="text"
          placeholder="Search for name, username or cafe name"
        />
        {unsuspendedCafe.length > 0 && (
          <div className="mt-4 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
            <table className="w-full mx-auto text-center">
              <thead>
                <tr>
                  <th className="text-left pb-[37px] font-medium"></th>
                  <th className="text-left pb-[37px] font-medium">Name</th>
                  <th className="text-left pb-[37px] font-medium">Username</th>
                  <th className="text-left pb-[37px] font-medium">Cafe Name</th>
                  <th className="text-center pb-[37px] font-medium">
                    Account Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {unsuspendedCafe &&
                  unsuspendedCafe.map((data, i) => {
                    const { owner_name, username, cafe_name } = data;

                    return (
                      <tr key={i} className="text-gray-500">
                        <td className="pb-6 pr-4 text-center">{i + 1}.</td>
                        <td className="pb-6 text-left">{owner_name}</td>
                        <td className="pb-6 text-left">{username}</td>
                        <td className="pb-6 text-left">{cafe_name}</td>
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

        {suspendedCafe.length > 0 && (
          <div className="mt-4 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
            <h2 className="mb-4 text-lg font-bold">Suspended Cafe</h2>
            <table className="w-full mx-auto text-center">
              <thead>
                <tr>
                  <th className="text-center w-[2rem] pb-[37px]"></th>
                  <th className="text-left pb-[37px] font-medium">Name</th>
                  <th className="text-left pb-[37px] font-medium">Username</th>
                  <th className="text-left pb-[37px] font-medium">Cafe Name</th>
                  <th className="text-center pb-[37px] font-medium">
                    Account Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {suspendedCafe &&
                  suspendedCafe.map((data, i) => {
                    const { owner_name, username, cafe_name } = data;

                    return (
                      <tr key={i} className="text-gray-500">
                        <td className="pb-6 pr-4 text-center">{i + 1}.</td>
                        <td className="pb-6 text-left">{owner_name}</td>
                        <td className="pb-6 text-left">{username}</td>
                        <td className="pb-6 text-left">{cafe_name}</td>
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
