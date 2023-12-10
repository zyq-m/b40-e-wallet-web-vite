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
    socket.emit("admin:get-overall");
    socket.on("admin:get-overall", (data) => {
      setStats(data);
    });
  }, [socket]);

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
                Total Coupon Transaction
              </div>
              <div className="mt-3 text-gray-600 ">
                <span className="font-semibold text-black text-7xl">
                  {stats.coupon}
                </span>{" "}
                transactions
              </div>
            </div>
            <div className="flex-1">
              <div className="pb-2 text-sm font-semibold uppercase border-b-2 border-b-black">
                Total Point Transaction
              </div>
              <div className="mt-3 text-gray-600 ">
                <span className="font-semibold text-black text-7xl">
                  {stats.point}
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
