import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";

export default function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Hero />
      <Offers />
    </>
  );
}
