import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import WelcomePage from "./Welcome";
import Sidebar from "./Sidebar";
import TodoApp from "./TodoApp/TodoApp";
import NewsApp from "./NewsApp/NewsApp";
import UserData from "./UserCRUD/UserData";
import WeatherApp from "./WeatherApp/WeatherApp";
import ContactUs from "./ContactUs";
import Dashboard from "./Dashboard";
import About from "./About";

const Home = () => {
  // const [selectedTab, setSelectedTab] = useState("Home");

  // let content;
  // switch (selectedTab) {
  //   case "Home":
  //     content = <WelcomePage />;
  //     break;
  //   case "TodoApp":
  //     content = <TodoApp />;
  //     break;
  //   case "NewsApp":
  //     content = <NewsApp />;
  //     break;
  //   case "UserData":
  //     content = <UserData />;
  //     break;
  //   case "WeatherDisplay":
  //     content = <WeatherApp />;
  //     break;
  //   case "ContactUs":
  //     content = <ContactUs />;
  //     break;
  //   case "Dashboard":
  //     content = <Dashboard />;
  //     break;
  //   case "About":
  //     content = <About />;
  //     break;

  //   // Add more cases for other tabs if needed
  //   default:
  //     content = <WelcomePage />;
  //     break;
  // }

  return (
    <>
      {/* <Header onTabSelect={setSelectedTab} />
      <Sidebar onTabSelect={setSelectedTab} />
      {content} */}
    </>
  );
};

export default Home;
