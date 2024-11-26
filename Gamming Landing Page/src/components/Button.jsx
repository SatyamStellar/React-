import { clsx } from "clsx"
const Button = ({title, id, rightIcon, leftIcon, containerClass}) => {
  return (
  <button
      id={id}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
        containerClass
      )}
    >      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>
          {title}
          </div>
      </span>
      {rightIcon}
    </button> 
  )
}

export default Button
