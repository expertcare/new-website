import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SigninSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.username) newErrors.username = "Please enter your username";
    if (!formData.password) newErrors.password = "Please enter your password";
    setErrors(newErrors);

    // if (Object.keys(newErrors).length === 0) {
    //   try {
    //     // Send user's input credentials to the JSON server for authentication
    //     const response = await axios.post("http://localhost:3000/signinData", {
    //       name: formData.username,
    //       password: formData.password,
    //     });

    //     // Check if the authentication was successful
    //     if (response.data.success) {
    //       // Authentication successful, navigate to the welcome page
    //       navigate("/welcome");
    //     } else {
    //       // Authentication failed, display an error message
    //       alert("Invalid username or password");
    //     }
    //   } catch (error) {
    //     // Handle any errors
    //     console.error("Error:", error);
    //   }
    // }

    if (Object.keys(newErrors).length === 0) {
      // Send user's input credentials to the API
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          expiresInMins: 30, // optional, defaults to 60
        }),
      })
        .then((res) => {
          if (!res.ok) {
            alert("wrong credentials, please try again..");
            throw new Error("Network response was not ok");
          }
          return res.json();
        })

        .then((jsonData) => {
          console.log("Received JSON data:", jsonData); // Display JSON data in console
          navigate("/welcome"); // Navigate to the welcome page
        })
        .catch((error) => {
          // Handle any errors
          console.error("Error:", error);
        });
    }
  };

  return (
    <section className="vh-100 my-4 my-md-auto">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-10 col-xl-9">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-6 d-flex flex-column align-items-center justify-content-center order-2 order-lg-1">
                    <img
                      src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg"
                      className="img-fluid"
                      alt="Sample image"
                    />
                    <Link to="/signup" className="text-center mt-4">
                      Create an account
                    </Link>
                  </div>
                  <div className="col-md-10  col-lg-6 col-xl-6 order-1 order-lg-2">
                    <p className="h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      {/* Username field */}
                      <div className="d-flex flex-row align-items-center mb-4 border-bottom">
                        <i className="fas fa-user fa-sm me-3 fa-fw"></i>
                        <div className="flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control border-0"
                            placeholder="Your username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                          />
                          {/* {errors.username && (
                            <div className="invalid-feedback">
                              {errors.username}
                            </div>
                          )} */}
                        </div>
                      </div>
                      {/* Password field */}
                      <div className="d-flex flex-row align-items-center mb-4  border-bottom">
                        <i className="fas fa-lock fa-sm me-3 fa-fw"></i>
                        <div className="flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control border-0"
                            placeholder="Your password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                          {/* {errors.password && (
                            <div className="invalid-feedback">
                              {errors.password}
                            </div>
                          )} */}
                        </div>
                      </div>
                      {/* Remember me checkbox */}
                      <div className="form-check mb-4">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          id="form2Example3c"
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          Remember me
                        </label>
                      </div>
                      {/* Submit button */}
                      <div className="d-flex mt-4 mb-3 mb-lg-4">
                        <button type="submit" className="my-btn btn btn-lg">
                          Log in
                        </button>
                      </div>
                    </form>
                    {/* Social login buttons */}
                    <div className="d-flex">
                      <p className="mx-1 mx-md-4 mt-4">or login with</p>
                      <ul className="socials d-flex mt-4 gap-3">
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-facebook fa-xl me-3 face-icon"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-square-twitter fa-xl me-3 twiter-icon"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-google fa-xl me-3 google-icon"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SigninSection;
