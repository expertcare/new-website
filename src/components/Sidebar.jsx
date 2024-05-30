import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      {/* Aside */}

      <aside
        className="bsb-sidebar-1 offcanvas offcanvas-start"
        tabIndex="-1"
        id="bsbSidebar1"
        aria-labelledby="bsbSidebarLabel1"
      >
        {/* Logo and clsose button  */}

        <div className="offcanvas-header">
          <a className="sidebar-brand" href="#!">
            <img
              src="https://rajrajhans.com/static/99e4a225dd2b10d50d9f3002d228ff6b/c1b63/post-13-2.png"
              alt="BootstrapBrain Logo"
              width="175"
              height="65"
            />
          </a>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        {/* Main Sidebar starts  */}

        <div className="offcanvas-body pt-0">
          <hr className="sidebar-divider mb-3" />

          {/* main list */}
          <ul className="navbar-nav">
            {/* List of Dashboard  */}
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <a
                className="nav-link p-3 active bg-light rounded"
                data-bs-toggle="collapse"
                href="#dashboardExamples"
                role="button"
                aria-expanded="true"
                aria-controls="dashboardExamples"
              >
                <div className="nav-link-icon text-primary">
                  <i className="fa-solid fa-house"></i>
                </div>
                <span className="nav-link-text fw-bold">Dashboards</span>
              </a>
              <div className="collapse show" id="dashboardExamples">
                <ul className="nav flex-column ms-4">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/dashboard"
                    >
                      <div className="nav-link-icon text-primary-emphasis">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                      <span className="nav-link-text">My Dashboard</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* List of pages  */}

            <li className="nav-item mt-3">
              <h6 className="py-1 text-secondary text-uppercase fs-7">Pages</h6>
            </li>
            <li className="nav-item">
              <a
                className="nav-link p-3"
                data-bs-toggle="collapse"
                href="#pageExamples"
                role="button"
                aria-expanded="false"
                aria-controls="pageExamples"
              >
                <div className="nav-link-icon text-danger">
                  <i className="fa-regular fa-folder"></i>
                </div>
                <span className="nav-link-text fw-bold">Projects</span>
              </a>
              <div className="collapse" id="pageExamples">
                <ul className="nav flex-column ms-4">
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <Link
                      className="nav-link link-secondary"
                      aria-current="page"
                      to="/todo"
                    >
                      <div className="nav-link-icon text-danger-emphasis">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                      <span className="nav-link-text">To Do App</span>
                    </Link>
                  </li>
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <Link
                      className="nav-link link-secondary"
                      aria-current="page"
                      to="/news"
                    >
                      <div className="nav-link-icon text-danger-emphasis">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                      <span className="nav-link-text">News App</span>
                    </Link>
                  </li>
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <Link
                      className="nav-link link-secondary"
                      aria-current="page"
                      to="/users-data"
                    >
                      <div className="nav-link-icon text-danger-emphasis">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                      <span className="nav-link-text">Users CRUD Demo</span>
                    </Link>
                  </li>
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <Link
                      className="nav-link link-secondary"
                      aria-current="page"
                      to="/weather"
                    >
                      <div className="nav-link-icon text-danger-emphasis">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                      <span className="nav-link-text">Kolhapur Weather</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* List of Authentication  */}

            <li className="nav-item">
              <a
                className="nav-link p-3"
                data-bs-toggle="collapse"
                href="#authExamples"
                role="button"
                aria-expanded="false"
                aria-controls="authExamples"
              >
                <div className="nav-link-icon text-success">
                  <i className="fa-solid fa-gear"></i>
                </div>
                <span className="nav-link-text fw-bold">Authentication</span>
              </a>
              <div className="collapse" id="authExamples">
                <ul className="nav flex-column ms-4">
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="/signin"
                    >
                      <div className="nav-link-icon text-success-emphasis">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                      <span className="nav-link-text">Sign In</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link link-secondary"
                      aria-current="page"
                      href="signup"
                    >
                      <div className="nav-link-icon text-success-emphasis">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                      <span className="nav-link-text">Sign Up</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
