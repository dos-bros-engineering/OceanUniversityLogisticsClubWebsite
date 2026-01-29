import Lottie from "lottie-react";
import animationData from "../../assets/fetching-data-error-animation.json";

const ErrorAnimation = () => {
  return (
    <>
      <div
        style={{
          width: "16%",
          overflow: "hidden",
          background: "#ffffff",
          borderRadius: "50%",
          paddingLeft: "1%",
          marginBottom: "1%"
        }}
        className="d-none d-lg-block"
      >
        <Lottie animationData={animationData} loop autoplay />
      </div>

      {/* Mobile view  */}
      <div
        style={{
          width: "35%",
          overflow: "hidden",
          background: "#ffffff",
          borderRadius: "50%",
          paddingLeft: "1%",
          marginBottom: "1%"
        }}
        className="d-lg-none"
      >
        <Lottie animationData={animationData} loop autoplay />
      </div>
    </>
  );
};

export default ErrorAnimation;
