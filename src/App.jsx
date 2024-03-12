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
import Ekupon from "./pages/usersdata/ekupon";
import Paynet from "./pages/usersdata/paynet";
import Maidam from "./pages/usersdata/maidam";
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
import SpendLimit from "./pages/spendLimit";

const ProtectedRoute = () => {
  let token = localStorage.getItem("access-token");
  if (!token) {
    return <Navigate to={"/admin-page/login"} replace />;
  }

  return <Outlet />;
};

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/admin-page/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin-page" element={<Dashboard />} />
            <Route path="/admin-page/spendLimit" element={<SpendLimit />} />
            <Route path="/admin-page/addCafe" element={<AddCafe />} />
            <Route path="/admin-page/addStudent" element={<AddStudent />} />
            <Route path="/admin-page/usersdata/cafe" element={<Cafe />} />
            <Route path="/admin-page/usersdata/ekupon" element={<Ekupon />} />
            <Route path="/admin-page/usersdata/paynet" element={<Paynet />} />
            <Route path="/admin-page/usersdata/maidam" element={<Maidam />} />
            <Route path="/admin-page/addWallet" element={<AddWallet />} />
            <Route
              path="/admin-page/transactions/allCafe"
              element={<AllCafe />}
            />
            <Route
              path="/admin-page/transactions/allStudentB40"
              element={<AllStudentB40 />}
            />
            <Route
              path="/admin-page/transactions/allStudentNB40"
              element={<AllStudentNB40 />}
            />
            <Route
              path="/admin-page/transactions/transCafe"
              element={<TransCafe />}
            />
            <Route
              path="/admin-page/transactions/details/cafeDetails/:cafeID"
              element={<CafeDetails />}
            />
            <Route
              path="/admin-page/transactions/details/studentB40/:matricData"
              element={<StudentB40Details />}
            />
            <Route
              path="/admin-page/transactions/details/studentNB40/:matricData"
              element={<StudentNB40Details />}
            />
            <Route
              path="/admin-page/transactions/points/studentB40/:matricData"
              element={<StudentB40DetailsPoints />}
            />
            <Route
              path="/admin-page/testingGet/:matricData"
              element={<TestingTransactionDetails />}
            />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
