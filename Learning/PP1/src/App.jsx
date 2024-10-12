import Header from "./components/Header";
import Main from "./components/Main";
import Profile from "./components/Profile";

const App = () => {
  return (
    <>
      <Profile />
      <div className="main_wrapper ml-0 w-full mid:ml-[30%] p-14 h-screen mid:w-[70%]">
        <Main />
        <Header />
      </div>
    </>
  );
};

export default App;
