import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
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

const MainContent = ({ isLoggedIn, login, logout }) => {
  console.log("isLoggedIn in MainContent:", isLoggedIn);

  const location = useLocation();
  const isAuthPage =
    location.pathname === "/signin" ||
    location.pathname === "/signup" ||
    location.pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on route change
  }, [location.pathname]);

  if (!isLoggedIn && !isAuthPage && location.pathname !== "/signin") {
    return <Navigate to="/signin" />;
  }

  return (
    <>
      {/* Render header only if not on auth page */}
      {!isAuthPage && <Header logout={logout} />}
      <Sidebar />

      <Routes>
        {isLoggedIn && (
          <>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/home" element={<Welcome />} />
            <Route path="/todo" element={<TodoApp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/news" element={<NewsApp />} />
            <Route path="/weather" element={<WeatherApp />} />
            <Route path="/users-data" element={<UserData />} />
          </>
        )}
        {
          <>
            <Route path="/" element={<SigninForm login={login} />} />
            <Route path="/signin" element={<SigninForm login={login} />} />
            <Route path="/signup" element={<SignupForm />} />
          </>
        }
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      {/* Render footer only if not on auth page */}
      {!isAuthPage && <Footer />}
    </>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check if user is logged in from local storage
    const storedIsLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

    console.log("Stored logged-in state:", storedIsLoggedIn);
    if (storedIsLoggedIn === true) {
      setIsLoggedIn(true);
    }
    setIsInitialized(true); // Set initialization flag
  }, []);

  //handle login
  const login = () => {
    console.log("User logged in");
    setIsLoggedIn(true);
    // Store logged-in state in local storage
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
  };

  //handle logout
  const logout = () => {
    console.log("User logged out");
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
  };

  // Don't render anything until the initialization is complete
  if (!isInitialized) {
    return null;
  }

  return (
    <Router>
      <MainContent isLoggedIn={isLoggedIn} login={login} logout={logout} />
    </Router>
  );
};

export default App;
