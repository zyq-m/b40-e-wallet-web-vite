import { api } from "../services/axiosInstance";

export const suspendCafe = async (id) => {
  try {
    const response = await api.put("/admin/user/suspend", {
      id: id,
      active: false, // Set 'active' to false to suspend the user
    });
    console.log("API Response:", response.data);
    if (response.data.message === "success") {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const unsuspendCafe = async (id) => {
  try {
    const response = await api.put("/admin/user/suspend", {
      id,
      active: true, // Set 'active' to true to unsuspend the user
    });
    console.log("API Response:", response.data);
    return {
      data: response.data,
      message: "success",
    };
  } catch (error) {
    console.error("API Error:", error);
    return {
      data: null,
      message: "error",
    };
  }
};

