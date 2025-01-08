

export const Heading = ({ className, title, text }) => {
  return (
    <div className={`${className} mx-auto max-w-[50rem] mb-12 lg:mb-20 `}>
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  )
}

