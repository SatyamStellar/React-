import checkedImage from "../assets/imgs/check-line.png";

const Inputs = () => {
  return (
    <>
      <div className="w-1/2 m-6 flex items-center flex-col justify-center h-auto relative">
        <div className="w-full flex items-center justify-center">
          <input
            type="text"
            className="bg-back-2 rounded-md w-[70%] p-4 px-4 placeholder:font-Varien text-xl text-center "
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
        <div className="mt-14 w-full justify-center flex flex-col items-center gap-2">
          <h2 className="heading_texts">Select Your Platform</h2>
          <select name="fruits" id="fruits">
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="date">Date</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Inputs;
