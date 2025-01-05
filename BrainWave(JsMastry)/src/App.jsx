import ButtonGradiant from "./assets/svg/ButtonGradient";
import Benifites from "./components/Benifites";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benifites />
      </div>
      <ButtonGradiant />
    </>
  );
};

export default App;
