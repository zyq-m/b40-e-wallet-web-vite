import { useState } from "react";
import Layout from "../components/Layout";
// import { useNavigate } from "react-router-dom";
import { registerCafe } from "../api/auth";

export default function AddCafe() {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    cafeId: '',
    cafeName: '',
    accountNo: '',
    phoneNo: '',
    address: '',
    password: '',
  });

  const [apiResponse, setApiResponse] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
  
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      // Call the registerCafe function with the form data
      const response = await registerCafe(
        formData.cafeId,
        formData.cafeName,
        formData.accountNo,
        formData.name,
        formData.phoneNo,
        formData.address,
        formData.password
      );

      // Update the state with the API response
      setApiResponse(response);

      // Optionally, you can reset the form fields after successful registration
      setFormData({
        name: '',
        cafeId: '',
        cafeName: '',
        accountNo: '',
        phoneNo: '',
        address: '',
        password: '',
      });
    } catch (error) {
      console.error("Error registering cafe:", error);
      setApiResponse(error);
    }
  };
  
  return (
    <Layout>
      <div className="p-9 rounded-2xl shadow-md bg-white w-[35rem]">
        <h1 className="mb-8 text-3xl font-bold text-center">Register Cafe</h1>
        <form onSubmit={handleSubmit}>
          <div className="items-center">
            <input
              type="text"
              name="name"
              className="w-full px-2 py-2 border border-gray-300 rounded-md"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
            <div className="mb-2" />
            <input
              type="text"
              name="cafeId"
              className="w-full px-2 py-2 border border-gray-300 rounded-md"
              placeholder="Username"
              value={formData.cafeId}
              onChange={handleChange}
            />
            <div className="mb-2" />
            <input
              type="text"
              name="cafeName"
              className="w-full px-2 py-2 border border-gray-300 rounded-md"
              placeholder="Cafe Name"
              value={formData.cafeName}
              onChange={handleChange}
            />
            <div className="mb-2" />
            <input
              type="text"
              name="accountNo"
              className="w-full px-2 py-2 border border-gray-300 rounded-md"
              placeholder="Account No."
              value={formData.accountNo}
              onChange={handleChange}
            />
            <div className="mb-2" />
            <input
              type="text"
              name="phoneNo"
              className="w-full px-2 py-2 border border-gray-300 rounded-md"
              placeholder="Phone No."
              value={formData.phoneNo}
              onChange={handleChange}
            />
            <div className="mb-2" />
            <textarea
              name="address"
              className="w-full px-2 py-2 border border-gray-300 rounded-md"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2" />
            <input
              type="password"
              name="password"
              className="w-full px-2 py-2 border border-gray-300 rounded-md"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          <div className="flex flex-col items-center">
            <button
              type="submit"
              // onClick={() => navigate("/dashboard")}
              className="mt-5 py-2 px-5 inline-flex justify-center items-center rounded-md border border-transparent font-semibold bg-[#Ffd035] text-black hover:bg-[#E4be3c] focus:outline-none focus:ring-2 focus:ring-[#Ffd035] focus:ring-offset-2 transition-all text-sm"
            >
              Register
            </button>
          </div>
        </form>
        {apiResponse && (
          <div className="mt-4">
            {/* Display the API response or error message here */}
            {apiResponse instanceof Error ? (
              <div className="text-red-500">{apiResponse.message}</div>
            ) : (
              <div className="text-green-500">Cafe registered successfully!</div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
