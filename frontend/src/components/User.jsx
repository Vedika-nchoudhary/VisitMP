import { FaUserCircle } from "react-icons/fa";

import {
  Link,
  useNavigate,
} from "react-router-dom";

function User() {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/");
  };

  

  return (

    <div className="dropdown ms-auto">

      <button
        className="btn border-0 bg-transparent d-flex align-items-center"
        data-bs-toggle="dropdown"
      >

        <FaUserCircle
          size={34}
          color="white"
        />

      </button>

      <ul
        className="dropdown-menu dropdown-menu-end shadow border-0 rounded-4 p-2"
        style={{
          minWidth: "220px",
        }}
      >

        {!token ? (

          <>
            <li>

              <Link
                className="dropdown-item rounded-3 py-2"
                to="/login"
              >
              Login
              </Link>

            </li>

            <li>

              <Link
                className="dropdown-item rounded-3 py-2"
                to="/signup"
              >
              Signup
              </Link>

            </li>

            
          </>

        ) : (

          <>
            <li className="dropdown-item-text fw-bold">

              Hello,
              {" "}
              {user?.name}

            </li>

           

            <li>

              <button
                className="dropdown-item rounded-3 py-2"
                onClick={handleLogout}
              >
              Logout
              </button>

            </li>
          </>
        )}

      </ul>

    </div>
  );
}

export default User;