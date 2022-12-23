import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Plan from "./components/Plan";
import Rooms from "./components/Rooms";

export default function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Rooms />
    </>
  );
}
