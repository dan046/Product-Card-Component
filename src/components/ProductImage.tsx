interface Props {
  DesktopImage: string
  MobileImage: string
  alt: string
}
const ProductImage = ({ DesktopImage, MobileImage, alt }: Props) => {
  return (
    <figure className="relative w-full">
      <img
        src={DesktopImage}
        alt={alt}
        className="hidden h-full w-full object-cover object-center md:block"
      />
      <img
        src={MobileImage}
        alt={alt}
        className="block h-full w-full object-cover object-center md:hidden"
      />
    </figure>
  )
}

export default ProductImage
