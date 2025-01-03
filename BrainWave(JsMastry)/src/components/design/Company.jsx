import { companyLogos } from "../../constants"


const Company = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-n-1/50 text-center">Helping people creating beautiful content at </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li className="flex items-center justify-center flex-1 h-[8.5rem]" key={index}>
            <img src={logo} alt={logo}
              width={134}
              height={28}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Company
