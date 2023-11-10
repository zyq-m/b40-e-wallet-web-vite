import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import StudentB40Details from "./pages/transactions/details/student/studentB40Details";
import StudentNB40Details from "./pages/transactions/details/student/studentNB40Details";
import TestingGet from "./pages/testingGet";
import TestingTransactionDetails from "./pages/testingTransactionDetails";
import TestingPost from "./pages/testingPost";
import TestingPut from "./pages/testingPut";
import NoPage from "./pages/nopage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
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
            path="/transactions/details/student/:matricData"
            element={<StudentB40Details />}
          />
          <Route
            path="/transactions/details/student/:matricData"
            element={<StudentNB40Details />}
          />
          <Route path="/testingGet" element={<TestingGet />} />
          <Route path="/testingPost" element={<TestingPost />} />
          <Route path="/testingPut" element={<TestingPut />} />
          <Route
            path="/testingGet/:matricData"
            element={<TestingTransactionDetails />}
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
