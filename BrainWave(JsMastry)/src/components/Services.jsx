import Section from "./Section"
import { Heading } from "./Heading"
import { service1, service2, service3, check } from "../assets"
import { brainwaveServices, brainwaveServicesIcons } from "../constants"
import Generating from "./design/Generating"
import { PhotoChatMessage, Gradient, VideoBar, VideoChatMessage } from "./design/Services"
const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          text="BrainWave unlock the potential of A.I-powered applications"
          title="Generative AI for creators" />
        <div className="relative ">
          <div className="relative z-1 items-center flex h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute size-full top-0 left-0 pointer-events-none md:w-3/5 xl:w-auto">
              <img
                width={800}
                height={730}
                className="size-full object-cover md:object-right" src={service1} alt="" />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h2 className="h4 mb-4">Smartest A.I</h2>
              <p className="body-2 mb-[3rem] text-n-3">BrainWave unlock the potential of A.I-powered applications</p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li key={index} className="flex items-start py-4 border-t border-n-6">
                    <img width={24} height={24} src={check} alt="" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="absolute bottom-4 left-4 right-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>
          <div className="relative grid gap-5 z-1 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  width={630}
                  height={750}
                  className="size-full object-cover"
                  src={service2} alt="" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h2 className="h4 mb-4">Photo Editing</h2>
                <p className="body-2 mb-[3rem] text-n-3">Automatically enhance your photos usng our A.I app&apos;s photo editing feature. Try it now</p>
              </div>
              <PhotoChatMessage />
            </div>
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[49rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video Generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">The world&apos;s most powerful A.I photo and video art generation engine. What will you create?</p>
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((icon, index) => (
                    <li key={index} className={`flex items-center rounded-2xl justify-center ${index == 2 ? 'w-[3rem] h-[3rem] p-0.25 bg-conic-gradient  md:w-[4.5rem] md:h-[4.5rem]' : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"}`}>
                      <div className={`${index == 2 ? "flex items-center justify-center size-full bg-n-7 rounded-[1rem]" : ''}`}>
                        <img
                          width={24}
                          height={24}
                          src={icon} alt="" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative bg-n-8 h-[20rem] rounded-xl overflow-hidden md:h-[25rem]">
                <img src={service3} alt="" className="size-full object-cover"
                  height={400}
                  width={520} />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  )
}

export default Services
