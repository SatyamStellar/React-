import { RiShining2Line } from "react-icons/ri";

const Header = () => {
  const hText = "Let's Meet";
  const h1Text = "I'm";
  return (
    <div className="mt-4">
      <h3 className="flex gap-2 items-center text-xl">
        <RiShining2Line /> {hText}
      </h3>
      <h1>
        {h1Text} Satyam Tomar {h1Text} a Frontend Designer and Developer
      </h1>
      <div></div>
    </div>
  );
};

export default Header;
