import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewsApp from "./components/NewsApp/NewsApp";
import Sidebar from "./components/Sidebar";
import SignupForm from "./components/SignupForm";
import SigninForm from "./components/SigninForm";
import TodoApp from "./components/TodoApp/TodoApp";
import UserData from "./components/UserCRUD/UserData";
import WeatherApp from "./components/WeatherApp/WeatherApp";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NotFound from "./components/NotFound";

const MainContent = ({ isLoggedIn, login, logout }) => {
  const location = useLocation();

  const isAuthPage = ["/signin", "/signup", "/"].includes(location.pathname);

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
            <Route path="/home" element={<Home />} />
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
        {/* Route for handling page not found */}
        <Route path="*" element={<NotFound />} />
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

    if (storedIsLoggedIn === true) {
      setIsLoggedIn(true);
    }
    setIsInitialized(true); // Set initialization flag
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", JSON.stringify(true)); // Store logged-in state in local storage
  };

  const logout = () => {
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
