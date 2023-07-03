import { ReactNode } from "react"

interface Props {
  children: ReactNode
}
const Card = ({ children }: Props) => {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="m-10 flex flex-col overflow-hidden rounded-lg bg-white shadow-lg md:m-0 md:w-[750px] md:flex-row">
        {children}
      </div>
    </main>
  )
}

export default Card
