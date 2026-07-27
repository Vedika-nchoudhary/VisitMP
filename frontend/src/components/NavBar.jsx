import User from "./User";
import { useLocation } from "react-router-dom";
import SearchBar from "../components/SearchBar";

export default function NavBar() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <>
      {/* Internal CSS */}
      <style>
        {`
          .custom-nav-link {
            position: relative;
            color: rgba(255,255,255,0.88) !important;
            font-weight: 500;
            transition: all 0.25s ease;
          }

          .custom-nav-link:hover {
            color: white !important;
          }

          .custom-nav-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -4px;
            width: 0%;
            height: 2px;
            background: #9ad1c4;
            transition: width 0.3s ease;
          }

          .custom-nav-link:hover::after {
            width: 100%;
          }

          @media (max-width: 991px) {
            .navbar-collapse {
              margin-top: 1rem;
            }

            .custom-nav-link {
              padding: 0.8rem 0;
            }
          }
        `}
      </style>

      <nav
        className="navbar navbar-expand-lg navbar-dark border-bottom fixed-top w-100"
        style={{
          paddingTop: "1rem",
          paddingBottom: "1rem",
          background: "rgba(0, 57, 72, 0.72)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          zIndex: 1000,
        }}
      >
        <div className="container-fluid px-3 px-lg-5">

          {/* Brand */}
          <a
            className="navbar-brand fw-semibold text-light"
            href="/"
            style={{
              fontSize: "1.35rem",
              letterSpacing: "0.5px",
            }}
          >
            MP Tourism
          </a>

          {/* Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4 text-center">

              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="/destination">
                  Destinations
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="/plan">
                  Plan Your Trip
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="/experiences">
                  Experiences
                </a>
              </li>

            </ul>

            {/* Search */}
            <SearchBar />

            {/* User Section */}
            <div className="d-flex align-items-center ms-3">
              <User />
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}