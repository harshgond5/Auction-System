import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Auctions from "./pages/Auctions";
import AuctionDetails from "./pages/AuctionDetails";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Watchlist from "./pages/Watchlist";
import CreateAuction from "./pages/CreateAuction";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyOTP from "./pages/VerifyOTP";
import ResetPassword from "./pages/ResetPassword";
import AI from "./components/AIAssistant/AI";

import ProtectedRoute from "./components/common/ProtectedRoute";

function App() {
   return (
    <>
      <Routes>

        {/* ================= PUBLIC LAYOUT ================= */}

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/auctions" element={<Auctions />} />

          <Route path="/auctions/:id" element={<AuctionDetails />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/watchlist"
            element={
              <ProtectedRoute>
                <Watchlist />
              </ProtectedRoute>
            }
          />
          <Route
           path="/create-auction"
           element={
          <ProtectedRoute role="user">
            <CreateAuction />
          </ProtectedRoute>
    }
/>

          {/* ================= AUTH PAGES ================= */}

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/reset-password" element={<ResetPassword />} />

        </Route>

      </Routes>

      <AI />

    </>
  );
}

export default App;