import { HiStar } from "react-icons/hi";

const Saved = () => {
  return (
    <div className="w-full justify-center flex flex-col items-center savedpass_div mt-6 md:mt-0 ">
      <h1 className="text-white text-3xl font-Varien w-full text-center  ">
        Saved Password
      </h1>
      <div className="w-[90%] flex justify-center items-start bg-back-3 h-[16vw] bg-opacity-35 rounded-xl overflow-y-scroll mt-4 overflow-scroll">
        <table className="min-w-full font-Poppins font-thin overflow-scroll">
          <thead>
            <tr className=" text-white uppercase text-sm leading-normal ">
              <th className="py-1 md:py-3 px-6 text-left">Platform</th>
              <th className="py-1 md:py-3 px-6 text-left">UserID/Email</th>
              <th className="py-1 md:py-3 px-6 text-left">Password</th>
              <th className="py-1 md:py-3 px-6 text-left">Saved</th>
            </tr>
          </thead>
          <tbody className="text-white font-Poppins text-sm font-light">
            <tr className="">
              <td className="py-1 md:py-3 px-6 text-left">Gmail</td>
              <td className="py-1 md:py-3 px-6 text-left">satya@gmail.com</td>
              <td className="py-1 md:py-3 px-6 text-left">sjfajj343</td>
              <td className="py-1 md:py-3 px-6 text-left">
                <button className=" ml-4 text-2xl">
                  <HiStar />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Saved;
