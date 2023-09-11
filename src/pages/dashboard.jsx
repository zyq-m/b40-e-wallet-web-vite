import Layout from "../components/Layout";

export default function Dashboard() {
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
                <span className="font-semibold text-black text-7xl">3410</span>{" "}
                students
              </div>
            </div>
            <div className="flex-1">
              <div className="pb-2 text-sm font-semibold uppercase border-b-2 border-b-black">
                Total Cafe
              </div>
              <div className="mt-3 text-gray-600">
                <span className="font-semibold text-black text-7xl">200</span>{" "}
                cafes
              </div>
            </div>
            <div className="flex-1">
              <div className="pb-2 text-sm font-semibold uppercase border-b-2 border-b-black">
                Total Transaction
              </div>
              <div className="mt-3 text-gray-600 ">
                <span className="font-semibold text-black text-7xl">9837</span>{" "}
                transactions
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
