import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer/Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          background: "#f8fafc",
        }}
      >
        <Outlet />
      </main>

      <Footer />
    </>
  );
}