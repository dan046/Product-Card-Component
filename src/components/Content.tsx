import Button from "./ui/Button"

const Content = () => {
  return (
    <section className="flex flex-col p-5 md:gap-5 md:p-10">
      <small className="mb-5">
        <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-dark-grayish-blue">
          perfume
        </h3>
      </small>
      <header className="mb-5">
        <h1 className="font-Fraunces text-4xl">
          Gabrielle Essence Eau De Parfum
        </h1>
      </header>
      <article className="flex flex-col gap-5">
        <p className="text-sm text-neutral-dark-grayish-blue">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex items-center gap-5 font-Fraunces">
          <h4 className="text-3xl text-custom-green">$149.99</h4>
          <small>
            <p className="font-light text-neutral-dark-grayish-blue line-through">
              $169.99
            </p>
          </small>
        </div>
        <Button text="Add to Cart" />
      </article>
    </section>
  )
}

export default Content
