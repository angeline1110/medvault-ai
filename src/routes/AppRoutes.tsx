import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/Landing/LandingPage";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import MedicalRecordsPage from "../pages/MedicalRecords/MedicalRecordsPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing */}
        <Route path="/" element={<LandingPage />} />

        {/* Authentication */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* Medical Records */}
        <Route
          path="/medical-records"
          element={<MedicalRecordsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;