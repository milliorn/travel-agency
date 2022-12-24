import React from "react";

function Hero(): JSX.Element {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://source.unsplash.com/random/2560x1440/?beach"
        loading="lazy"
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>Panoptic</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Private Resorts &amp; Paradises
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            facere incidunt inventore quas sint dolore hic laudantium quis
            maxime quam.
          </p>
          <button className="bg-white text-black">RSVP Now</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
