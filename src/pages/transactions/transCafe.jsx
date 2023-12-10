import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";
import { getCafeData } from "../../api/auth";
export default function Cafe() {
  const [cafeTransactions, setCafeTransactions] = useState([]);
  const [filteredCafe, setFilteredCafe] = useState([]);
  const navigate = useNavigate();

  const onCafeTransaction = async (cafeId) => {
    navigate(`/transactions/details/cafeDetails/${cafeId}`, {
      state: { cafeId },
    });
  };

  useEffect(() => {
    fetchDataCafeTrans();
  }, []);

  console.log("transCafe");

  const fetchDataCafeTrans = async () => {
    try {
      const response = await getCafeData();
      setCafeTransactions(response.data);
      setFilteredCafe(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle search input and update filteredStudents state
  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();

    const filtered = cafeTransactions.filter((cafe) =>
      cafe.id.toLowerCase().includes(searchQuery)
    );
    setFilteredCafe(filtered);
  };

  return (
    <Layout>
      <div className="items-center w-2/3 my-6">
        <h1 className="mb-[30px] font-bold text-3xl">
          Transactions List (Cafe Owners)
        </h1>
        <input
          className="w-full px-2 py-2 border border-gray-300 rounded-md"
          type="text"
          onChange={handleSearch}
          placeholder="Search by Cafe ID..."
        />
        <div className="mt-4 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="w-full mx-auto text-center">
            <thead>
              <tr>
                <td className="w-[4rem]"></td>
                <td className="text-left pb-[37px] font-medium">Cafe ID</td>
              </tr>
            </thead>
            <tbody>
              {filteredCafe.map((cafe, index) => (
                <tr key={index} className="text-gray-500">
                  <td className="pb-6 pr-4 text-center">{index + 1}.</td>
                  <td className="pb-6 text-left">{cafe.id}</td>{" "}
                  {/* Update to cafe.cafeId */}
                  <td className="pb-6">
                    <button
                      type="submit"
                      className="py-2 px-5 inline-flex justify-center items-center rounded-md border border-transparent font-semibold bg-[#C5c5c5] text-black hover:bg-[#Aaaaaa] focus:outline-none focus:ring-2 focus:ring-[#C5c5c5] focus:ring-offset-2 transition-all text-sm"
                      onClick={() => onCafeTransaction(cafe.id)}
                    >
                      Show Details
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
