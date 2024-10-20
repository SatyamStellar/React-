import { HiStar } from "react-icons/hi";

const History = () => {
  return (
    <>
      <div className="w-full  mt-4 justify-center flex flex-col items-center savedpass_div">
        <h1 className="text-white w-full text-center text-3xl font-Varien">
          Password History
        </h1>
        <div className="w-full md:w-[90%] flex justify-center items-start bg-back-3 h-[16vw] bg-opacity-35 rounded-xl overflow-y-scroll mt-4">
          <table className="min-w-full font-Poppins font-thin ">
            <thead>
              <tr className=" text-white uppercase text-sm leading-normal">
                <th className="py-1 md:py-3  md:px-6 text-center  md:text-left">
                  Platform
                </th>
                <th className="py-1 md:py-3  md:px-6 text-center  md:text-left">
                  UserID/Email
                </th>
                <th className="py-1 md:py-3  md:px-6 text-center  md:text-left">
                  Password
                </th>
                <th className="py-1 md:py-3  md:px-6 text-center  md:text-left">
                  Saved
                </th>
              </tr>
            </thead>
            <tbody className="text-white font-Poppins text-sm font-light">
              {/* {data.map((row) => ( */}
              <tr className="">
                <td className="py-1 md:py-3  md:px-6 text-center  md:text-left">
                  Gmail
                </td>
                <td className="py-1 md:py-3  md:px-6 text-center  md:text-left">
                  satya@gmail.com
                </td>
                <td className="py-1 md:py-3  md:px-6 text-center  md:text-left">
                  sjfajj343
                </td>
                <td className="py-1 md:py-3  md:px-6 text-center  md:text-left">
                  <button className=" ml-4 text-2xl">
                    <HiStar />
                  </button>
                </td>
              </tr>
              {/* // ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default History;
