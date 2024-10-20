import Inputs from "./components/Inputs";
import History from "./components/History";
import Saved from "./components/Saved";

const App = () => {
  return (
    <>
      <div className="w-full p-14 h-auto overflow-y-scroll bg-back-1 ">
        <h1 className="text-5xl font-Varien text-col-1">
          Random Password <span className="text-col-2">Generator</span>
        </h1>
        <div className="flex flex-col justify-center w-full h-auto md:flex md:flex-row md:items-start md:justify-evenly mt-10 ">
          <Inputs />
          <div className=" w-full h-1/2 md:w-1/2 md:h-14">
            <Saved />
            <History />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
