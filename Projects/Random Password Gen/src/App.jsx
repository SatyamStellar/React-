import Inputs from "./components/Inputs";
import History from "./components/History";
import Saved from "./components/Saved";

const App = () => {
  return (
    <div className="w-full p-14 min-h-screen bg-back-1 ">
      <h1 className="text-5xl font-Varien text-col-1">
        Random Password <span className="text-col-2">Generator</span>
      </h1>
      <div className="w-full h-full flex items-start justify-evenly mt-10">
        <Inputs />
        <div className="bg-purple-400 w-1/2 opacity-20 h-14">
          <Saved />
          <History />
        </div>
      </div>
    </div>
  );
};

export default App;
