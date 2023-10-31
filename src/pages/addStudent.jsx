import { useState } from "react";
import Layout from "../components/Layout";
// import { useNavigate } from "react-router-dom";
import { registerStudent } from "../api/auth";

export default function AddStudent() {
  // const navigate = useNavigate();

  const [formData, setFormData] = useState({
    matricNo: "",
    icNo: "",
    b40: false, // Initialize as false (boolean)
    name: "",
    phoneNo: "",
    address: "",
  });

  const [apiResponse, setApiResponse] = useState(null);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    // If the input type is checkbox, set the "b40" field as a boolean (true or false)
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      // Call the registerCafe function with the form data
      const response = await registerStudent(
        formData.matricNo,
        formData.icNo,
        formData.b40,
        formData.name,
        formData.phoneNo,
        formData.address
      );

      // Update the state with the API response
      setApiResponse(response);

      // Optionally, you can reset the form fields after successful registration
      setFormData({
        matricNo: "",
        icNo: "",
        b40: false, // Reset to 'false'
        name: "",
        phoneNo: "",
        address: "",
      });
    } catch (error) {
      console.error("Error registering student:", error);
      setApiResponse(error);
    }
  };

  return (
    <Layout>
      <div className="p-9 rounded-2xl shadow-md bg-white w-[35rem]">
        <h1 className="mb-8 text-3xl font-bold text-center">
          Register Student
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="items-center">
            <input
              type="text"
              name="matricNo"
              className="w-full px-2 py-2 border border-gray-300 rounded-md"
              placeholder="Matric No."
              value={formData.matricNo}
              onChange={handleChange}
            />
            <div className="mb-2" />
            <input
              type="text"
              name="icNo"
              className="w-full px-2 py-2 border border-gray-300 rounded-md"
              placeholder="IC No."
              value={formData.icNo}
              onChange={handleChange}
            />
            <div className="mb-2" />
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
            <div className="mb-2" />
            <input
              type="checkbox"
              name="b40"
              className="px-2 py-2"
              checked={formData.b40}
              onChange={handleChange}
            />
            <label htmlFor="b40" className="ml-2">
              B40 Student?(Tick if yes)
            </label>
          </div>
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
              //Cafe
              // <div className="text-green-500">Cafe registered successfully!</div>
              //Student
              <div className="text-green-500">
                Student registered successfully!
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
