import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa6";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLocked) {
      alert(
        "Too many failed attempts. Please wait 15 minutes before trying again.",
      );
      return;
    }

    if (!formData.email || !formData.password) {
      alert("Email and password are required.");

      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");

      return;
    }

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters.");

      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8080/auth/login",
        formData,
      );

      sessionStorage.setItem("token", res.data.token);

      sessionStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful");

      setAttempts(0);

      const redirectPath = sessionStorage.getItem("redirectAfterLogin");

      if (redirectPath) {
        sessionStorage.removeItem("redirectAfterLogin");

        navigate(redirectPath);
      } else {
        navigate("/");
      }
    } catch (error) {
      const newAttempts = attempts + 1;

      setAttempts(newAttempts);

      if (newAttempts >= 5) {
        setIsLocked(true);

        alert(
          "Your account has been temporarily locked due to too many failed attempts. Please try again after 15 minutes.",
        );

        setTimeout(
          () => {
            setIsLocked(false);

            setAttempts(0);
          },
          15 * 60 * 1000,
        );
      } else {
        alert(
          `Invalid email or password. ${5 - newAttempts} attempts remaining.`,
        );
      }
    }
  };

  return (
    <div className="login-page">
      <div className="container py-5">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-lg-5 col-md-8">
            <div className="login-card p-4 p-md-5">
              <div className="text-center mb-4">
                <p className="login-subheading mb-2">WELCOME BACK</p>

                <h1 className="fw-bold login-title">Login</h1>

                <p className="login-text">
                  Continue your Madhya Pradesh journey
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                {/* EMAIL */}

                <div className="login-input-group mb-3">
                  <span className="login-icon">
                    <FaEnvelope />
                  </span>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    className="form-control login-input"
                    onChange={handleChange}
                  />
                </div>

                {/* PASSWORD */}

                <div className="login-input-group mb-4">
                  <span className="login-icon">
                    <FaLock />
                  </span>

                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    className="form-control login-input"
                    onChange={handleChange}
                  />
                </div>

                {/* BUTTON */}

                <button className="btn w-100 login-btn" disabled={isLocked}>
                  Login
                  <FaArrowRight className="ms-2" />
                </button>
              </form>

              {/* FOOTER */}

              <p className="text-center mt-4 mb-0 login-footer">
                Don't have an account?
                <Link to="/signup" className="login-link ms-1">
                  Signup
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
