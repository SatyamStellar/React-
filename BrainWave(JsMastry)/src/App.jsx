import ButtonGradiant from "./assets/svg/ButtonGradient";
import Benifites from "./components/Benifites";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benifites />
        <Collaboration />
        <Services />
      </div>
      <ButtonGradiant />
    </>
  );
};

export default App;
