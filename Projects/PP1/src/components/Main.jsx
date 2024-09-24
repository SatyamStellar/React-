import { FaSun } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { LuUser2 } from "react-icons/lu";
import { RiUser4Line } from "react-icons/ri";
import { FaFileAlt } from "react-icons/fa";
import { RiContactsBook3Line } from "react-icons/ri";
import { useState, useEffect } from "react";

const Main = () => {
  const [theme, settheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeHandler = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };

  const btnText = "Let's Talk";
  return (
    <>
      <nav className="flex justify-center md:justify-between h-20  items-center ">
        <ul className="flex  gap-4 items-center ">
          <li className="nav-btn">
            <a href="#">
              <span className="">Home</span>
            </a>
            <i className="">
              <GoHome />
            </i>
          </li>
          <li className="nav-btn">
            <a href="#">
              <span>About Me</span>
            </a>
            <i className="">
              <RiUser4Line />
            </i>
          </li>
          <li className="nav-btn">
            <a href="#">
              <span>Portfolio</span>
            </a>
            <i className="">
              <LuUser2 />
            </i>
          </li>
          <li className="nav-btn">
            <a href="#">
              <span>Resume</span>
            </a>
            <i className="">
              <FaFileAlt />
            </i>
          </li>
          <li className="nav-btn">
            <a href="#">
              <span>Contact</span>
            </a>
            <i className="">
              <RiContactsBook3Line />
            </i>
          </li>
          <li>
            <button
              onClick={themeHandler}
              className="text-2xl .nav-btn md:hidden dark:text-white"
            >
              <FaSun />
            </button>
          </li>
        </ul>
        <div className="md:flex hidden gap-4 items-center justify-center ">
          <button onClick={themeHandler} className="text-2xl  dark:text-white">
            <FaSun />
          </button>
          <div>
            <button className="btn-primary  ">{btnText}</button>
          </div>
          <button className="text-2xl hidden mid:inline-block dark:text-white">
            <CiMenuFries />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Main;
