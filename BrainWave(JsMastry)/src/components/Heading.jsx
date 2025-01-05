

export const Heading = ({ className, title }) => {
  return (
    <div className={`${className} mx-auto max-w-[50rem] mb-12 lg:mb-20 `}>
      {title && <h2 className="h2">{title}</h2>}
    </div>
  )
}

