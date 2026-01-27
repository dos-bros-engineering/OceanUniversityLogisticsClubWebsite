import Lottie from 'lottie-react';
import animationData from '../../assets/not-found-animation.json';

const NotFoundAnimation = () => {
  return (
    <div
      style={{
        width: "55%",
        overflow: "hidden",
        background: "#d8d8d8",
        borderRadius: "50%",
        padding: "2%"
      }}
    >
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
}

export default NotFoundAnimation;