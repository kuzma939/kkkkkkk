import Hero from "./components/Hero/Hero.jsx";
import TopProducts from "./components/TopProducts/TopProducts.jsx";
import FollowUs from "./components/Follow/Follow.jsx";
import About from "./components/About/About.jsx";
import SpecialOffers from "./components/SpecialOffers/SpecialOffers.jsx";

export default function Home() {
  return (
    <div className="transition-colors">
      <Hero />
      <TopProducts />
      <SpecialOffers />
     
      <About />
      <FollowUs />

     </div>
  );
}
