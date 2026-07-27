import { useNavigate } from "react-router-dom";

function CategoryCard(props) {

  const navigate = useNavigate();

  return (

    <div
      className="col-lg-4 col-md-6"
      onClick={() =>
        navigate(
          `/destination/${props.title.toLowerCase()}`
        )
      }
      style={{ cursor: "pointer" }}
    >

      <div className="position-relative overflow-hidden rounded-4 shadow">

        <img
          src={props.image}
          alt={props.title}
          className="img-fluid w-100"
          style={{
            height: "420px",
            objectFit: "cover"
          }}
        />

        <div
          className="position-absolute bottom-0 start-0 w-100 p-4"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
          }}
        >

          <div className="d-flex justify-content-between align-items-center text-white">

            <h3 className="fw-semibold">
              {props.title}
            </h3>

            <i className="fa-solid fa-arrow-right fs-4"></i>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CategoryCard;