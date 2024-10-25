import ButtonGradiant from "./assets/svg/ButtonGradient";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <h1 className="text-2xl text-white">Satyam Tomar</h1>
      <div className="pt-[4.75rem] lg:pt[5.25rem] overflow-hidden"></div>
      <Button className="mt-10" herf="#login">
        Something
      </Button>
      <ButtonGradiant />
    </>
  );
};

export default App;
