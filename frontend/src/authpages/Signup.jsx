import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa6";

import "./Signup.css";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password
    ) {
      alert("All fields are required.");
      return;
    }

    if (formData.name.trim().length < 2) {
      alert("Please enter a valid name.");
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])/;

    if (!passwordRegex.test(formData.password)) {
      alert(
        "Password must contain at least one number and one special character."
      );
      return;
    }

    try {

      const res = await axios.post(
        "http://localhost:8080/auth/signup",
        formData
      );

      alert(res.data.message);

      navigate("/login");

    } catch (error) {

      alert(error.response.data.message);

    }
  };

  return (

    <div className="signup-page-signup d-flex align-items-center justify-content-center py-5">

      <div className="container">

        <div className="row justify-content-center">

          <div className="col-lg-5 col-md-8">

            <div className="signup-card-signup p-4 p-md-5">

              <div className="text-center mb-5">

                <p className="signup-subheading-signup mb-2">
                  JOIN THE JOURNEY
                </p>

                <h2 className="fw-bold signup-title-signup">
                  Create Account
                </h2>

                <p className="signup-text-signup">
                  Start exploring Madhya Pradesh with us
                </p>

              </div>

              <form onSubmit={handleSubmit}>

                {/* NAME */}

                <div className="mb-4">

                  <label className="form-label signup-label-signup">
                    Full Name
                  </label>

                  <div className="input-group">

                    <span className="input-group-text signup-iconbox-signup">
                      <FaUser />
                    </span>

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="form-control signup-input-signup"
                      onChange={handleChange}
                    />

                  </div>

                </div>

                {/* EMAIL */}

                <div className="mb-4">

                  <label className="form-label signup-label-signup">
                    Email Address
                  </label>

                  <div className="input-group">

                    <span className="input-group-text signup-iconbox-signup">
                      <FaEnvelope />
                    </span>

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="form-control signup-input-signup"
                      onChange={handleChange}
                    />

                  </div>

                </div>

                {/* PASSWORD */}

                <div className="mb-4">

                  <label className="form-label signup-label-signup">
                    Password
                  </label>

                  <div className="input-group">

                    <span className="input-group-text signup-iconbox-signup">
                      <FaLock />
                    </span>

                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      className="form-control signup-input-signup"
                      onChange={handleChange}
                    />

                  </div>

                </div>

                {/* BUTTON */}

                <button
                  className="btn w-100 signup-btn-signup"
                >
                  Create Account
                </button>

              </form>

              <p className="text-center mt-4 signup-logintext-signup">

                Already have an account?

                <Link
                  to="/login"
                  className="signup-link-signup ms-2"
                >
                  Login
                </Link>

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Signup;