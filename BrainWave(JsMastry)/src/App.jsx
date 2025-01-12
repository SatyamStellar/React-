import ButtonGradiant from "./assets/svg/ButtonGradient";
import Benifites from "./components/Benifites";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import RoadMap from "./components/RoadMap";
import Services from "./components/Services";
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benifites />
        <Collaboration />
        <Services />
        <Pricing />
        <RoadMap />
        <Footer />
      </div>
      <ButtonGradiant />
    </>
  );
};

export default App;
