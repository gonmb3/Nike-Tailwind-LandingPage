import offer from "../assets/offer.svg"

const Offerts = () => {
  return (
    <section className='flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
        <div className="flex-1 ">
        <img src={offer} alt="" width={770} height={687} className='object-contain w-full'/>  
        </div>  

    <div className="flex flex-1 flex-col">
    <h2 className="capitalize mt-10 font-palanquin text-4xl  font-bold lg:max-w-lg">
          Ofertas <span className="text-pink-500/50">Especiales</span>
          <br />
    
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisiciipsum dolor sit amet
          consectetur adipisicing elit. Quas soluta alias eaque aut.ng elit.
          Quas soluta alias eaque aut.
        </p>

        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit est
          dignissimos sint saepe totam.
        </p>
        <div className="mt-11 flex gap-4">
          <button
            className="bg-pink-500/50 hover:bg-pink-500/90 duration-300 flex items-center
             justify-center border px-7 py-3 font-montserrat text-lg leading-none rounded-full text-white "
          >
            Comprar Ahora
          </button>

          <button
            className="border-gray-400  bg-trasnparent flex items-center text-gray-400 
             justify-center border px-7 py-3 font-montserrat text-lg leading-none rounded-full  "
          >
            Ver Más
          </button>
          </div>
    </div>
    </section>
  )
}

export default Offerts