import Section from "./Section"
import { smallSphere, stars } from "../assets"
import { Heading } from "./Heading"
import PricingList from "./PricingList"
import { LeftLine, RightLine } from "./design/Pricing"
const Pricing = () => {
  return (
    <Section className="overflow-hidden " id="pricing">
      <div className="relative z-2 container">
        <div className="hidden lg:flex relative justify-center mb-[6.5rem]">
          <img src={smallSphere} alt="" className="relative z-1" height={255} width={255} />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img src={stars} alt="" width={950} height={400} className="size-full" />
          </div>
        </div>
        <Heading
          tag="Get Started With Brainwave"
          title="Pay Once, Use Forever "
        />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        <div className="flex justify-center mt-10">
          <a className="font-bold text-xs font-code tracking-wider uppercase border-b" href="#">See the full details</a>
        </div>
      </div>
    </Section>
  )
}

export default Pricing
