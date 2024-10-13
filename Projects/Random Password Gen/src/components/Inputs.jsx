import checkedImage from "../assets/imgs/check-line.png";

const Inputs = () => {
  return (
    <>
      <div className="w-1/2 m-6 flex items-center flex-col justify-center h-auto relative">
        <div className="w-full flex items-center justify-center">
          <input
            type="text"
            className="bg-back-2 rounded-lg w-[70%] p-4 px-4 placeholder:font-Varien text-xl text-center "
            placeholder="Your Password"
            name=""
            id=""
          />
        </div>
        <div className="mt-4 text-2xl font-Varien flex flex-row gap-[50%] gap-y-4 flex-wrap  w-[60%] text-col-1">
          <div className="flex items-center justify-center gap-3">
            <input
              type="checkbox"
              id="ABC__checkbox"
              className="w-6 h-6 bg-back-2  rounded-full appearance-none border border-zinc-200 checked:bg-green-700 "
              style={{
                backgroundImage: `url(${checkedImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <label htmlFor="ABC__checkbox">ABC</label>
          </div>
          <div className="flex items-center justify-center gap-3">
            <input
              type="checkbox"
              id="abc__checkbox"
              className="w-6 h-6 bg-back-2  rounded-full appearance-none border border-zinc-200 checked:bg-green-700 "
              style={{
                backgroundImage: `url(${checkedImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <label htmlFor="abc__checkbox">ABC</label>
          </div>
          <div className="flex items-center justify-center gap-3">
            <input
              type="checkbox"
              id="123__checkbox"
              className="w-6 h-6 bg-back-2  rounded-full appearance-none border border-zinc-200 checked:bg-green-700 "
              style={{
                backgroundImage: `url(${checkedImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <label htmlFor="123__checkbox">ABC</label>
          </div>
          <div className="flex items-center justify-center gap-3">
            <input
              type="checkbox"
              id="SYM__checkbox"
              className="w-6 h-6 bg-back-2  rounded-full appearance-none border border-zinc-200 checked:bg-green-700 "
              style={{
                backgroundImage: `url(${checkedImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <label htmlFor="SYM__checkbox">ABC</label>
          </div>
        </div>
        <div className="mt-4 w-full">
          <div className="mt-14 w-full justify-center flex flex-col items-center gap-2">
            <h2 className="heading_texts">Select Your Platform</h2>
            <select
              name="Platforms"
              id="platforms"
              className="w-[60%] p-3 text-center text-white font-Varien bg-back-1 outline-none border border-zinc-200 rounded-lg "
            >
              <option value="gmail">Gmail</option>

              <option value="insta">Istagram</option>
              <option value="facebook">Facebook</option>
              <option value="reddit">Reddit</option>
              <option value="outlook">Outlook</option>
            </select>
            <div className="w-full hidden items-center justify-center mt-2 ">
              <input
                type="text"
                className="bg-back-2 rounded-lg w-[70%] p-4 px-4 placeholder:font-Varien text-xl text-center "
                placeholder="Enter your Platform"
                name=""
                id=""
              />
            </div>
          </div>
          <div
            className="w-full mt-8 flex flex-col justify-center items-center
          "
          >
            <h2 className="heading_texts">UserId/E-Mail</h2>
            <input
              type="text"
              className="w-[60%] mt-4 p-3 text-sm text-center text-white font-Varien bg-back-1 outline-none border border-zinc-200 rounded-lg "
              placeholder="Your Id"
              name=""
            />
          </div>
          <div className="w-full items-center flex justify-center mt-8">
            <button className="bg-back-2 rounded-lg w-[60%] p-4 px-4 placeholder:font-Varien text-xl text-center heading_texts  ">
              Generate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inputs;
