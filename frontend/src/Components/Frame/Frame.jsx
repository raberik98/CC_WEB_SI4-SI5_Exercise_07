import { Outlet } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import "./Frame.css";

export default function Frame() {
  return (
    <main>
      <Navbar />
      <div className="frame-content">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
