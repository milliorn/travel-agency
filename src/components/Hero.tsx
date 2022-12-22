import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://source.unsplash.com/random/2560x1440/?beach"
        alt="beach"
      />
      {/* overlay */}
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
    </div>
  );
};

export default Hero;
