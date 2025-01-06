import Section from "./Section"
import { collabApps, collabContent, collabText } from "../constants"
import { brainwaveSymbol, check } from "../assets"
import Button from "./Button"
import { LeftCurve, RightCurve } from "./design/Collaboration"
const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 lg:mb-8">AI Chat App For Seamless collaboration</h2>
          <ul className="max-w-[22rem] mb-10 lg:mb-14 ">
            {collabContent.map((item) => (
              <li className="mb-3 py-3 " key={item.id}>
                <div className="flex items-center ">
                  <img src={check} alt="icon"
                    width={24}
                    height={24}
                  />
                  <h6 className="ml-5 body-2">{item.title}</h6>
                </div>
                {item.text &&
                  (
                    <p className="body-1 mt-3 text-n-4">{item.text}</p>
                  )}
              </li>
            ))}
          </ul>
          <Button>
            Try it now
          </Button>
        </div>
        <div className="lg:mx-auto xl:w-[38rem]">
          <p className="body-2 mb-4 text-n-4 md:mb-6 lg:mb-32 lg:w-[22rem] lg:mx-auto mt-6">{collabText}</p>
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className=" flex w-60 aspect-square rounded-full m-auto border border-n-6">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center size-full bg-n-8 rounded-full">
                  <img src={brainwaveSymbol} alt="icon"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((app, index) => (
                <li key={app.id} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}>
                  <div className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-2xl -rotate-${index * 45}`}>
                    <img src={app.icon} alt=""
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Collaboration
