import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { socket } from "../services/socketInstance";

export default function Dashboard() {
  const [stats, setStats] = useState({
    student: 0,
    cafe: 0,
    transaction: 0,
    point: 0,
  });

  useEffect(() => {
    socket.on("admin:get-overall", (data) => {
      // data response
      // {
      //   student: 4,
      //   cafe: 5,
      //   coupon: 5,
      //   point: 10,
      // }
      setStats(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <Layout>
        <div className="w-[60%]">
          <h1 className="mb-[30px] font-bold text-3xl">Summary</h1>
          <div className="flex p-6 bg-white border rounded-md gap-9">
            <div className="flex-1">
              <div className="pb-2 text-sm font-semibold uppercase border-b-2 border-b-black">
                Total Student
              </div>
              <div className="mt-3 text-gray-600">
                <span className="font-semibold text-black text-7xl">
                  {stats.student}
                </span>{" "}
                students
              </div>
            </div>
            <div className="flex-1">
              <div className="pb-2 text-sm font-semibold uppercase border-b-2 border-b-black">
                Total Cafe
              </div>
              <div className="mt-3 text-gray-600">
                <span className="font-semibold text-black text-7xl">
                  {stats.cafe}
                </span>{" "}
                cafes
              </div>
            </div>
            <div className="flex-1">
              <div className="pb-2 text-sm font-semibold uppercase border-b-2 border-b-black">
                Total Transaction
              </div>
              <div className="mt-3 text-gray-600 ">
                <span className="font-semibold text-black text-7xl">
                  {stats.transaction}
                </span>{" "}
                transactions
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
// import { useState, useEffect } from "react";
// import Layout from "../components/Layout";
// import { getSummary } from "../api/auth";
// // import { socket } from "../services/socketInstance";

// export default function Dashboard() {
//   const [summary, setSummary] = useState({
//     students: undefined
//   });

//   useEffect(() => {
//     console.log("Component mounted!"); // Add this line to check if the component mounts
//     const fetchData = async () => {
//       try {
//         const data = await getSummary();
//         console.log(data); // Add this line to check the data
//         setSummary(data);
//       } catch (error) {
//         console.error("Error fetching summary data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log(summary);
//   return (
//     <>
//       <Layout>
//         <div className="w-[60%]">
//           <h1 className="mb-[30px] font-bold text-3xl">Summary</h1>
//           <div className="flex p-6 bg-white border rounded-md gap-9">
//             <div className="flex-1">
//               <div className="pb-2 text-sm font-semibold uppercase border-b-2 border-b-black">
//                 Total Student
//               </div>
//               <div className="mt-3 text-gray-600">
//                 <span className="font-semibold text-black text-7xl">
//                   {summary && summary.students}
//                 </span>{" "}
//                 students
//               </div>
//             </div>
//             <div className="flex-1">
//               <div className="pb-2 text-sm font-semibold uppercase border-b-2 border-b-black">
//                 Total Cafe
//               </div>
//               <div className="mt-3 text-gray-600">
//                 <span className="font-semibold text-black text-7xl">
//                   {/* {summary && summary.cafe} */}
//                   123
//                 </span>{" "}
//                 cafes
//               </div>
//             </div>
//             <div className="flex-1">
//               <div className="pb-2 text-sm font-semibold uppercase border-b-2 border-b-black">
//                 Total Transaction
//               </div>
//               <div className="mt-3 text-gray-600 ">
//                 <span className="font-semibold text-black text-7xl">
//                   {/* {summary && summary.transactionsStudent} */}
//                   2000
//                 </span>{" "}
//                 transactions
//               </div>
//             </div>
//           </div>
//         </div>
//       </Layout>
//     </>
//   );
// }
