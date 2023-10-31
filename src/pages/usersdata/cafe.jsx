import Layout from "../../components/Layout";
import { getCafeData, suspendUser, unsuspendUser, } from "../../api/auth";
import { useState, useEffect } from "react";

export default function Cafe() {
  const [cafe, setCafes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // Fetch cafe data when the component mounts
    fetchDataCafe();
  }, []);

  const fetchDataCafe = async () => {
  try {
      const response = await getCafeData();
      setCafes(response.data);
  } catch (error) {
      console.error(error);
  }
};

//suspend user
const handleSuspend = async (userId) => {
  try {
    await suspendUser(userId);
    await fetchDataCafe();
  } catch (error) {
    console.error("Error suspending cafe:", error);
  }
};

//unsuspend user
const handleUnsuspend = async (userId) => {
  try {
    await unsuspendUser(userId); // Suspend the user (active = false)
    // await fetchDataCafe();
    await fetchDataCafe();
  } catch (error) {
    console.error("Error unsuspending cafe:", error);
    // Handle the error as needed.
  }
};
    
// Cafe Filter data for active and inactive status
const unsuspendedCafes = cafe.filter((cafeItem) => cafeItem.user.active);
const suspendedCafes = cafe.filter((cafeItem) => !cafeItem.user.active);

// Filter data based on searchText
const filteredUnsuspendedCafes = unsuspendedCafes.filter((cafeItem) => {
  const searchTerm = searchText.toLowerCase();
  return (
    cafeItem.id.toLowerCase().includes(searchTerm) ||
    cafeItem.name.toLowerCase().includes(searchTerm) ||
    cafeItem.accountNo.toLowerCase().includes(searchTerm)
  );
});

const filteredSuspendedCafes = suspendedCafes.filter((cafeItem) => {
  const searchTerm = searchText.toLowerCase();
  return (
    cafeItem.id.toLowerCase().includes(searchTerm) ||
    cafeItem.name.toLowerCase().includes(searchTerm) ||
    cafeItem.accountNo.toLowerCase().includes(searchTerm)
  );
});
  return (
    <Layout>
      <div className="items-center w-2/3 mt-7 mb-7">
        <h1 className="mb-[30px] font-bold text-3xl">Cafe Owners Data</h1>
        <input
          className="w-full px-2 py-2 border border-gray-300 rounded-md"
          type="text"
          placeholder="Search for ID, Name, or Account Number"
          value={searchText}
          onChange={({ target }) => setSearchText(target.value)}
        />
        <div className="mt-4 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          {/* Display unsuspended cafes */}
          <table className="w-full mx-auto text-center">
            <thead>
            <tr>
              <th className="text-center w-[2rem] pb-[37px]"></th>
              <th className="text-center pb-[37px] font-medium">ID</th>
              <th className="text-center pb-[37px] font-medium">Name</th>
              <th className="text-center pb-[37px] font-medium">Account No</th>
              <th className="text-center pb-[37px] font-medium">User ID</th>
              <th className="text-center pb-[37px] font-medium">Active Status</th>
              <th className="text-center pb-[37px] font-medium">Account Action</th>
            </tr>
            </thead>
            <tbody>
              {filteredUnsuspendedCafes.map((cafeItem, index) => (
                <tr key={index} className="text-gray-500">
                  <td className="pb-6 pr-4 text-center">{index + 1}.</td>
                  <td className="pb-6 text-left">{cafeItem.id}</td>
                  <td className="pb-6 text-left">{cafeItem.name}</td>
                  <td className="pb-6 text-center">{cafeItem.accountNo}</td>
                  <td className="pb-6 text-center">{cafeItem.userId}</td>
                  <td className="pb-6 text-center">{cafeItem.user.active ? "Active" : "Inactive"}</td>
                  <td>
                    <button
                      type="button"
                      className="py-2 px-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#EE4B2B] text-white hover:bg-[#880808] focus:outline-none focus:ring-2 focus:ring-[#EE4B2B] focus:ring-offset-2 transition-all text-sm"
                      onClick={() => handleSuspend(cafeItem.userId)}
                    >
                      Suspend
                    </button>
                  </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Display suspended cafes */}
          <div className="mt-4 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
            <h2 className="mb-4 text-lg font-bold">Suspended Cafe</h2>
            <table className="w-full mx-auto text-center">
              <thead>
              <tr>
                <th className="text-center w-[2rem] pb-[37px]"></th>
                <th className="text-center pb-[37px] font-medium">ID</th>
                <th className="text-center pb-[37px] font-medium">Name</th>
                <th className="text-center pb-[37px] font-medium">Account No</th>
                <th className="text-center pb-[37px] font-medium">User ID</th>
                <th className="text-center pb-[37px] font-medium">Active Status</th>
                <th className="text-center pb-[37px] font-medium">Account Action</th>
              </tr>
              </thead>
              <tbody>
                {filteredSuspendedCafes.map((cafeItem, index) => (
                  <tr key={index} className="text-gray-500">
                    <td className="pb-6 pr-4 text-center">{index + 1}.</td>
                    <td className="pb-6 text-left">{cafeItem.id}</td>
                    <td className="pb-6 text-left">{cafeItem.name}</td>
                    <td className="pb-6 text-center">{cafeItem.accountNo}</td>
                    <td className="pb-6 text-center">{cafeItem.userId}</td>
                    <td className="pb-6 text-center">{cafeItem.user.active ? "Active" : "Inactive"}</td>
                    <td>
                      <button
                        type="button"
                        className="py-2 px-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#289a1c] text-white hover:bg-[#16500f] focus:outline-none focus:ring-2 focus:ring-[#289a1c] focus:ring-offset-2 transition-all text-sm"
                        onClick={() => handleUnsuspend(cafeItem.userId)}
                      >
                        Unsuspend
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
    </Layout>
  );
}
