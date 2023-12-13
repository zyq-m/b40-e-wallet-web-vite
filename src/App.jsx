import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import AddCafe from "./pages/addCafe";
import AddStudent from "./pages/addStudent";
import Cafe from "./pages/usersdata/cafe";
import StudentB40 from "./pages/usersdata/studentB40";
import StudentNB40 from "./pages/usersdata/studentNB40";
import AddWallet from "./pages/addWallet";
import AllCafe from "./pages/transactions/allCafe";
import AllStudentB40 from "./pages/transactions/allStudentB40";
import AllStudentNB40 from "./pages/transactions/allStudentNB40";
import TransCafe from "./pages/transactions/transCafe";
import CafeDetails from "./pages/transactions/details/cafe/cafeDetails";
import StudentB40Details from "./pages/transactions/details/studentB40/studentB40Details";
import StudentNB40Details from "./pages/transactions/details/studentNB40/studentNB40Details";
import StudentB40DetailsPoints from "./pages/transactions/points/studentB40/studentB40DetailsPoints";
import TestingTransactionDetails from "./pages/testingTransactionDetails";
import NoPage from "./pages/nopage";

const ProtectedRoute = () => {
  let token = localStorage.getItem("access-token");
  if (!token) {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
};

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addCafe" element={<AddCafe />} />
            <Route path="/addStudent" element={<AddStudent />} />
            <Route path="/usersdata/cafe" element={<Cafe />} />
            <Route path="/usersdata/studentB40" element={<StudentB40 />} />
            <Route path="/usersdata/studentNB40" element={<StudentNB40 />} />
            <Route path="/addWallet" element={<AddWallet />} />
            <Route path="/transactions/allCafe" element={<AllCafe />} />
            <Route
              path="/transactions/allStudentB40"
              element={<AllStudentB40 />}
            />
            <Route
              path="/transactions/allStudentNB40"
              element={<AllStudentNB40 />}
            />
            <Route path="/transactions/transCafe" element={<TransCafe />} />
            <Route
              path="/transactions/details/cafeDetails/:cafeID"
              element={<CafeDetails />}
            />
            <Route
              path="/transactions/details/studentB40/:matricData"
              element={<StudentB40Details />}
            />
            <Route
              path="/transactions/details/studentNB40/:matricData"
              element={<StudentNB40Details />}
            />
            <Route
              path="/transactions/points/studentB40/:matricData"
              element={<StudentB40DetailsPoints />}
            />
            <Route
              path="/testingGet/:matricData"
              element={<TestingTransactionDetails />}
            />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
