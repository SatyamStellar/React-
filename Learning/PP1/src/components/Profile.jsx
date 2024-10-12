import HeroImg from "../assets/images/profile.webp";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { RiDiscordLine } from "react-icons/ri";

const Profile = () => {
  const btnText = "Let's Work Togeather !";
  return (
    <div className="left-[0%] mid:left-[2%] font-Syne min-h-[80vh] sm:w-[360px] px-8  py-10 lg:fixed top-[10%] xl:left-[5%] border-[1.25px] border-zinc-200 rounded-2xl flex flex-col justify-between bg-bgcol static my-[5px] w-full  mid:m-0 dark:text-bgcol dark:bg-zinc-800">
      <h2 className=" text-4xl mb-4">Satyam Tomar</h2>
      <div className="w-full h-72 object-cover rounded-2xl  ">
        <img
          className="w-full h-full object-cover rounded-2xl "
          src={HeroImg}
          alt=""
        />
      </div>
      <div className="mt-4">
        <p className="text-sm">Specialization</p>
        <h3 className="text-2xl font-semibold">
          Frontend Designer And Developer
        </h3>
      </div>
      <div className="mt-4">
        <p>Follow me on Social Media</p>
        <div className="flex gap-4 text-xl w-full mt-4">
          <a href="#">
            <i className="border-[2px] rounded-full w-8 h-8 flex items-center justify-center hover:text-black dark:hover:text-zinc-600 hover:scale-125 transition-all duration-200">
              <BiLogoFacebook />
            </i>
          </a>
          <a href="#">
            <i className="border-[2px] rounded-full w-8 h-8 flex items-center justify-center hover:text-black dark:hover:text-zinc-600 hover:scale-125 transition-all duration-200">
              <FaInstagram />
            </i>
          </a>
          <a href="">
            <i className="border-[2px] rounded-full w-8 h-8 flex items-center justify-center hover:text-black dark:hover:text-zinc-600 hover:scale-125 transition-all duration-200">
              <FiTwitter />
            </i>
          </a>
          <a href="">
            <i className="border-[2px] rounded-full w-8 h-8 flex items-center justify-center hover:text-black dark:hover:text-zinc-600 hover:scale-125 transition-all duration-200">
              <RiDiscordLine />
            </i>
          </a>
        </div>
      </div>
      <button className="btn-primary mt-6">{btnText}</button>
    </div>
  );
};

export default Profile;
