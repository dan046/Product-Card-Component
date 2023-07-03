import ProductImage from "./components/ProductImage"
import Card from "./components/ui/Card"
import DesktopImage from "./assets/images/image-product-desktop.jpg"
import MobileImage from "./assets/images/image-product-mobile.jpg"
import Content from "./components/Content"

const App = () => {
  return (
    <Card>
      <ProductImage
        DesktopImage={DesktopImage}
        MobileImage={MobileImage}
        alt="An image of a perfume bottle"
      />
      <Content />
    </Card>
  )
}

export default App
