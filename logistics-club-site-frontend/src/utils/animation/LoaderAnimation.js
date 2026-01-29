import Lottie from "lottie-react";
import animationData from "../../assets/loader-animation.json";

const LoaderAnimation = () => {
  return (
    <>
      <div
        style={{
          width: "18%",
          overflow: "hidden",
        }}
        className="d-none d-lg-block"
      >
        <Lottie animationData={animationData} loop autoplay />
      </div>

      {/* Mobile view  */}
      <div
        style={{
          width: "45%",
          overflow: "hidden",
        }}
        className="d-lg-none"
      >
        <Lottie animationData={animationData} loop autoplay />
      </div>
    </>
  );
};

export default LoaderAnimation;
