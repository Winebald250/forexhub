import Lottie from "react-lottie";
import animationData from "../animation/animation.bg.json";

const LottieBackground = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="absolute left-0 w-full h-full -z-10">
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default LottieBackground;
