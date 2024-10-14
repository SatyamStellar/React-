import { HiStar } from "react-icons/hi";

const History = () => {
  return (
    <>
      <div className="w-full  mt-4 justify-center flex flex-col items-center savedpass_div">
        <h1 className="heading_texts">Password History</h1>
        <div className="w-[90%] flex justify-center items-start bg-back-3 h-[16vw] bg-opacity-35 rounded-xl overflow-y-scroll mt-4">
          <table className="min-w-full font-Poppins font-thin ">
            <thead>
              <tr className=" text-white uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Platform</th>
                <th className="py-3 px-6 text-left">UserID/Email</th>
                <th className="py-3 px-6 text-left">Password</th>
                <th className="py-3 px-6 text-left">Saved</th>
              </tr>
            </thead>
            <tbody className="text-white font-Poppins text-sm font-light">
              {/* {data.map((row) => ( */}
              <tr className="">
                <td className="py-3 px-6 text-left">Gmail</td>
                <td className="py-3 px-6 text-left">satya@gmail.com</td>
                <td className="py-3 px-6 text-left">sjfajj343</td>
                <td className="py-3 px-6 text-left">
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
