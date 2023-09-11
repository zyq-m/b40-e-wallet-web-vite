import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";
export default function Cafe() {
  const navigate = useNavigate();

  // Sample cafe owner data array
  const cafeOwnerData = [
    {
      id: 1,
      cafe_name: "Kafe Sabri",
      // Add more properties as needed
    },
    {
      id: 2,
      cafe_name: "Restoran Sakinah",
      // Add more properties as needed
    },
    {
      id: 3,
      cafe_name: "Satey Abu Bakar",
      // Add more properties as needed
    },
    {
      id: 2,
      cafe_name: "Restoran Jiran Seblah",
      // Add more properties as needed
    },
    // Add more cafe owner objects as needed
  ];

  return (
    <Layout>
      <div className="items-center w-2/3 my-6">
        <h1 className="mb-[30px] font-bold text-3xl">
          Transactions List (Cafe Owners)
        </h1>
        <div className="mt-4 p-8 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
          <table className="w-full mx-auto text-center">
            <thead>
              <tr>
                <td className="w-[4rem]"></td>
                <td className="text-left pb-[37px] font-medium">Cafe</td>
              </tr>
            </thead>
            <tbody>
              {cafeOwnerData.map((data, i) => {
                return (
                  <tr key={i} className="text-gray-500">
                    <td className="pb-6 pr-4 text-center">{i + 1}.</td>
                    <td className="pb-6 text-left">{data.cafe_name}</td>
                    <td className="pb-6">
                      <button
                        type="submit"
                        onClick={() =>
                          navigate("/transactions/details/cafeDetails")
                        }
                        className=" py-2 px-5 inline-flex justify-center items-center rounded-md border border-transparent font-semibold bg-[#C5c5c5] text-black hover:bg-[#Aaaaaa] focus:outline-none focus:ring-2 focus:ring-[#C5c5c5] focus:ring-offset-2 transition-all text-sm"
                      >
                        Show Details
                      </button>
                    </td>
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
