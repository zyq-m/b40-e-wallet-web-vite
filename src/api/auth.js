import { api } from "../services/axiosInstance";

// login
export const login = async (id, password) => {
  return await api.post("/auth/login", {
    id: id,
    password: password,
  });
};

export const renewToken = async () => {
  const refreshToken = localStorage.getItem("refresh-token");
  return await api.post("/auth/token", {
    refreshToken: refreshToken,
  });
};
// nanti aku bagi full documentation api

export const logout = async () => {
  const refreshToken = localStorage.getItem("refresh-token");
  return await api.post("/auth/logout", {
    refreshToken: refreshToken,
  });
};

export const cafeData = async () => {
  try {
    const response = await api.get("/admin/cafe");

    return response.data;
  } catch (error) {
    // You can handle the error here if needed, e.g., log it
    console.error("Error fetching cafe data:", error);
    throw error;
  }
};

export const studentData = async () => {
  try {
    const response = await api.get("/admin/student");

    return response.data;
  } catch (error) {
    // You can handle the error here if needed, e.g., log it
    console.error("Error fetching cafe data:", error);
    throw error;
  }
};

export const getSummary = async () => {
  try {
    const response = await api.get("/admin/student");

    return {
      students: response.data?.total_students,
    };
  } catch (error) {
    // You can handle the error here if needed, e.g., log it
    console.error("Error fetching student data:", error);
    throw error;
  }
};

export const getReport = async () => {
  return api.get("/admin/report/transaction");
};

const getData = async (endpoint, params = {}) => {
  const response = await api.get(endpoint, { params });
  return response.data;
};

export const getStudentData = (role) => {
  return getData(`/admin/student/${role}`);
};

export const getCafeData = async () => {
  return getData("/admin/cafe");
};

export const getStudentTransactions = async (matricNo) => {
  return getData(`/admin/student/transactions/${matricNo}`);
};

export const getStudentPointTransactions = async (matricNo) => {
  return getData(`/admin/student/points/${matricNo}`);
};

export const getCafeTransactions = async (cafeId) => {
  return getData(`/admin/cafe/transactions/${cafeId}`);
};

export const getCafeTransactionsByDate = async (cafeId, from, to) => {
  return getData(`/admin/cafe/transactions/${cafeId}/${from}/${to}`);
};

export const getStudentPointsB40 = async () => {
  return getData("/admin/student/points", { params: { b40: true } });
};

export const getStudentPointsNB40 = async () => {
  return getData("/admin/student/points", { params: { b40: false } });
};

export const getReportTransaction = async (fromDate, toDate) => {
  return getData(`/admin/report/transaction/${fromDate}/${toDate}`);
};

export const getReportPDF = async (fromDate, toDate) => {
  return getData(`/admin/report/transaction/pdf/${fromDate}/${toDate}`);
};

export const registerStudent = async (
  matricNo,
  icNo,
  b40,
  name,
  phoneNo,
  address
) => {
  try {
    const response = await api.post("/admin/user/register/student", {
      matricNo: matricNo,
      icNo: icNo,
      b40: b40,
      name: name,
      phoneNo: phoneNo,
      address: address,
    });

    return response.data;
  } catch (error) {
    // You can handle the error here if needed
    console.error("Error registering student:", error);
    throw error;
  }
};

export const registerCafe = async (
  cafeId,
  cafeName,
  accountNo,
  name,
  phoneNo,
  address,
  password
) => {
  try {
    const response = await api.post("/admin/user/register/cafe", {
      cafeId: cafeId,
      cafeName: cafeName,
      accountNo: accountNo,
      name: name,
      phoneNo: phoneNo,
      address: address,
      password: password,
    });

    return response.data;
  } catch (error) {
    // You can handle the error here if needed
    console.error("Error registering cafe:", error);
    throw error;
  }
};

export const suspendUser = async (userId) => {
  try {
    const response = await api.put("/admin/user/suspend", {
      id: userId,
      active: false, // Set 'true' to activate the user, 'false' to suspend
    });

    return response.data;
  } catch (error) {
    // You can handle the error here if needed
    console.error("Error suspending user:", error);
    throw error;
  }
};

export const unsuspendUser = async (userId) => {
  try {
    const response = await api.put("/admin/user/suspend", {
      id: userId,
      active: true, // Set 'true' to activate the user, 'false' to suspend
    });

    return response.data;
  } catch (error) {
    // You can handle the error here if needed
    console.error("Error suspending user:", error);
    throw error;
  }
};

export const updateB40WalletAmount = async (matricNo, amount) => {
  try {
    const response = await api.put("/admin/student/wallet", {
      matricNo: matricNo,
      amount: amount,
    });

    return response.data;
  } catch (error) {
    // You can handle the error here if needed
    console.error("Error updating B40 wallet amount:", error);
    throw error;
  }
};
