import NotFoundAnimation from "../../utils/animation/NotFoundAnimation";
import UseTitleName from "../../utils/UseTitleName";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  UseTitleName("Page Not Found");

  const navigate = useNavigate();

  return (
    <div
      className="container d-flex justify-content-center align-items-center min-vh-100"
      data-aos="fade-up"
    >
      <div className="row">
        <div className="p-0 d-flex justify-content-center col-lg-8">
          <NotFoundAnimation />
        </div>

        <div className="p-0 col-lg-4 mt-2 mt-lg-0">
          <div className="mx-4">
            <h1 className="mb-0">Route Not Found</h1>
            <div className="divider pt-1 bg-white rounded"></div>
          </div>
          <div className="mt-3">
            <h4 className="mx-4">
              Oops! This shipment seems to be off the grid. The page you’re
              looking for couldn’t be delivered.
            </h4>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-light btn-lg mt-2 fw-bold"
                onClick={() => navigate("/")}
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
