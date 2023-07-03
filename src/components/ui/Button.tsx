interface Props {
  text: string
}
const Button = ({ text }: Props) => {
  return (
    <button className="w-full rounded-md transition-colors">
      {text}
    </button>
  )
}

export default Button
