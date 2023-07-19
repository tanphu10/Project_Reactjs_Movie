import React from "react";
import Lottie from "react-lottie";
import * as animationLoading from "./../../assets/animation/loading.json.json";
const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLoading,
    rendererSettings: {
      preserveAspectRatio: "animationLoading",
    },
  };
  return (
    <div
      className="h-screen w-full flex items-center fixed bg-white"
      style={{ zIndex: "999" }}
      //   redux làm thêm một state , overFlowY: hidden
    >
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Loading;
