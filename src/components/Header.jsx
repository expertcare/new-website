import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* <!-- Header comment --> */}
      <header id="header-demo">
        <nav className="navbar navbar-expand-sm bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand d-sm-none" href="#!">
              <img
                src="https://seeklogo.com/images/T/the-project-logo-6082FFB8D5-seeklogo.com.png"
                alt="BootstrapBrain Logo"
                width="95"
                height="65"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#bsbNavbar"
              aria-controls="bsbNavbar"
              aria-label="Toggle Navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="bsbNavbar"
              aria-labelledby="bsbNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="bsbNavbarLabel">
                  Menu
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav  d-flex gap-4">
                  <li className="nav-item me-3">
                    <a
                      className="nav-link"
                      href="#!"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#bsbSidebar1"
                      aria-controls="bsbSidebar1"
                    >
                      <i className="bi-filter-left fs-3 lh-1"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active fw-medium"
                      aria-current="page"
                      to="/home"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item fw-medium">
                    <Link className="nav-link" aria-current="page" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item fw-medium ">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar-nav ms-auto header-btn">
              <Link to="/signin" className="btn my-btn2 ">
                Sign out
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
