import { api } from "../services/axiosInstance";

export const setCafe = async (cafeData) => {
  try {
    const response = await api.post("/admin/user/register/cafe", cafeData);

    // Log the response data for debugging purposes
    console.log("API Response:", response.data);

    if (response.status === 201) {
      // Registration was successful
      return response.data;
    } else {
      // Handle unexpected status codes here
      console.error("Unexpected status code:", response.status);
      throw new Error(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error while registering cafe:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};
