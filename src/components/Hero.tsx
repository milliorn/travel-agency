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
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div>
          <p>Exclusive</p>
          <h1>Private &amp; Getaways</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis odit nulla itaque tempore optio incidunt nesciunt amet
            delectus ducimus dolore explicabo, odio quia perferendis doloribus
            facere, tempora, ab quod maiores!
          </p>
          <button>RSVP Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
