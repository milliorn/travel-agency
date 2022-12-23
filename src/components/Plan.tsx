function Plan(): JSX.Element {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* left side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          loading="lazy"
          className="object-cover w-full h-full p-2 row-span-3"
          src="https://source.unsplash.com/random/2560x1440/?Hawaii"
          alt="/"
        />
        <img
          loading="lazy"
          className="object-cover w-full h-full p-2 row-span-2"
          src="https://source.unsplash.com/random/2560x1440/?Paradise"
          alt="/"
        />
        <img
          loading="lazy"
          className="object-cover w-full h-full p-2 row-span-2"
          src="https://source.unsplash.com/random/2560x1440/?Maldives"
          alt="/"
        />
        <img
          loading="lazy"
          className="object-cover w-full h-full p-2 row-span-3"
          src="https://source.unsplash.com/random/2560x1440/?island"
          alt="/"
        />
        <img
          loading="lazy"
          className="object-cover w-full h-full p-2 row-span-2"
          src="https://source.unsplash.com/random/2560x1440/?resort"
          alt="/"
        />
      </div>
      {/* right side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">
          Plan Your Next Getaway
        </h3>
        <p className="text-2xl py=6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          molestiae ut laboriosam laborum aliquam corrupti cumque totam hic in
          facere illo libero illum pariatur numquam sint ea et, minus atque.
        </p>
        <p className="pb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
          necessitatibus odit beatae earum facilis illo nostrum alias voluptate
          error magni, cum voluptatibus distinctio dolorum harum quod adipisci
          quae qui veniam.
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Learn More
          </button>
          <button className="bg-black text-white border-black hover:shadow-xl">
            Reserve Your Excursion
          </button>
        </div>
      </div>
    </div>
  );
}

export default Plan;
