import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import SignupForm from "./components/SignupForm";
import SigninForm from "./components/SigninForm";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import TodoApp from "./components/TodoApp/TodoApp";
import Dashboard from "./components/Dashboard";
import NewsApp from "./components/NewsApp/NewsApp";
import WeatherApp from "./components/WeatherApp/WeatherApp";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import UserData from "./components/UserCRUD/UserData";
import Sidebar from "./components/Sidebar";

const MainContent = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/signin" ||
    location.pathname === "/signup" ||
    location.pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on route change
  }, [location.pathname]);

  return (
    <>
      {/* Render header only if not on auth page */}
      {!isAuthPage && <Header />}
      <Sidebar />

      <Routes>
        <Route path="/" element={<SigninForm />} />
        <Route path="/signin" element={<SigninForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/home" element={<Welcome />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/news" element={<NewsApp />} />
        <Route path="/weather" element={<WeatherApp />} />
        <Route path="/users-data" element={<UserData />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      {/* Render footer only if not on auth page */}
      {!isAuthPage && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <MainContent />
    </Router>
  );
};

export default App;
