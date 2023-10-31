import { api } from "../services/axiosInstance";
import { renewToken } from "../api/auth"; // Import the renewToken function

export const getSummary = async () => {
  // Call renewToken to ensure you have a valid token
  await renewToken();

  // Now you can fetch student data
  const studentsResponse = await api.get("/admin/student");

  return {
    students: studentsResponse.data?.total_students,
  };
};
