function Plan(): JSX.Element {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* left side */}
      <div>
        <img
          src="https://source.unsplash.com/random/2560x1440/?Hawaii"
          alt="/"
        />
        <img
          src="https://source.unsplash.com/random/2560x1440/?Paradise"
          alt="/"
        />
        <img
          src="https://source.unsplash.com/random/2560x1440/?Maldives"
          alt="/"
        />
        <img
          src="https://source.unsplash.com/random/2560x1440/?island"
          alt="/"
        />
        <img
          src="https://source.unsplash.com/random/2560x1440/?resort"
          alt="/"
        />
      </div>
      {/* right side */}
      <div>
        <h3>Plan Your Next Trip</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          molestiae ut laboriosam laborum aliquam corrupti cumque totam hic in
          facere illo libero illum pariatur numquam sint ea et, minus atque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
          necessitatibus odit beatae earum facilis illo nostrum alias voluptate
          error magni, cum voluptatibus distinctio dolorum harum quod adipisci
          quae qui veniam.
        </p>
        <div>
          <button>Learn More</button>
          <button>Reserve Your Excursion</button>
        </div>
      </div>
    </div>
  );
}

export default Plan;
