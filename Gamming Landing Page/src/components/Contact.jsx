import Button from "./Button"
const ImageBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="" />
  </div>
)

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="bg-black rounded-lg py-24 relative text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:w-96 lg:left-20">
          <ImageBox clipClass="contact-clip-path-1" src="img/contact-1.webp" />
          <ImageBox clipClass="contact-clip-path-2 translate-y-60 lg:translate-y-40" src="img/contact-2.webp" />
        </div>
        <div className="absolute -top-40 left-20  w-60 sm:top-1/2 md:left-auto md:right-5 lg:top-20 lg:w-80">
          <ImageBox clipClass="absolute md:scale-125" src="img/swordman-partial.webp" />
          <ImageBox clipClass="sword-man-clip-path md:scale-125" src="img/swordman.webp" />
        </div>
        <div className="flex flex-col text-center items-center">
          <p className="font-general text-[10px] uppercase">Join Zentry</p>
          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem] ">Let's b<b>u</b>ild the <br /> new era <b>o</b>f<br /> g<b>a</b>ming t<b>o</b>geather</p>
          <Button title="Contact Us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default Contact
