import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="p-9 rounded-2xl shadow-md bg-white w-[35rem]">
        <h1 className="mb-8 text-3xl font-bold text-center">Register Cafe</h1>
        <form>
          <div className="items-center">
            <input
              type="text"
              className="w-full px-2 py-2 border border-gray-300 rounded-md"
              placeholder="Full Name"
            />
            <div className="mb-2" />
            <input
              type="text"
              className="w-full px-2 py-2 border border-gray-300 rounded-md"
              placeholder="Username"
            />
            <div className="mb-2" />
            <input
              type="text"
              className="w-full px-2 py-2 border border-gray-300 rounded-md"
              placeholder="Cafe Name"
            />
            <div className="mb-2" />
            <input
              type="password"
              className="w-full px-2 py-2 border border-gray-300 rounded-md"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col items-center">
            <button
              type="submit"
              onClick={() => navigate("/dashboard")}
              className="mt-5 py-2 px-5 inline-flex justify-center items-center rounded-md border border-transparent font-semibold bg-[#Ffd035] text-black hover:bg-[#E4be3c] focus:outline-none focus:ring-2 focus:ring-[#Ffd035] focus:ring-offset-2 transition-all text-sm"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
