import { Heading } from "./Heading"
import Section from "./Section"

import { benefits } from "../constants"
import Arrow from "../assets/svg/Arrow"
import { GradientLight } from "./design/Benefits"
import ClipPath from "../assets/svg/ClipPath"

const Benifites = () => {
  return (
    <Section id="features">
      <div className="container relative z-1 ">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smater, Not Harder with BrinWave"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%]  md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`
              }}
              key={item.id}>
              <div className="flex z-2 relative  flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="mb-5 h5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img src={item.iconUrl} alt="icon"
                    width={48}
                    height={48}
                  />
                  <p className="ml-auto fon-code text-xs font-bold text-n-1 uppercase tracking-wider">Explore More</p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}
              <div className="inset-0.5 absolute bg-n-8 "
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img src={item.imageUrl} alt="img"
                      width={380}
                      height={362}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Benifites
