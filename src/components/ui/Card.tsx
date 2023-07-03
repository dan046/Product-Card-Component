import { ReactNode } from "react"

interface Props {
  children: ReactNode
}
const Card = ({ children }: Props) => {
  return <main className="w-[375px] md:w-[1440px] bg-white rounded-lg">{children}</main>
}

export default Card
