import { BsCart4 } from "react-icons/bs"
interface Props {
  text: string
}
const Button = ({ text }: Props) => {
  return (
    <button className="flex w-full items-center justify-center gap-3 rounded-md bg-custom-green p-5 font-Montserrat text-white transition-colors hover:bg-[#5abe99]">
      <BsCart4 />
      {text}
    </button>
  )
}

export default Button
