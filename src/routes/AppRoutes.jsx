import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Pages
import Home from "../pages/Home";
// import Deals from "../pages/Deals";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ContactUs from "../pages/ContactUs";
// import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
      <div className="flex flex-col min-h-screen">

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>

            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* Deals Page */}
            {/* <Route path="/deals" element={<Deals />} /> */}

            {/* Login Page */}
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<ContactUs/>} />

            {/* Signup Page */}
            <Route path="/signup" element={<Signup />} />

            {/* 404 Page */}
            {/* <Route path="*" element={<NotFound />} /> */}

          </Routes>
        </main>

        {/* Footer */}
        <Footer />

      </div>
  );
};

export default AppRoutes;