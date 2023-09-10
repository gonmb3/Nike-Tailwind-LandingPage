import shoe8 from "../assets/shoe8.svg"

const SuperQuality = () => {
  return (
    <section
      id="nosotros"
      className="flex justify-between items-center max-lg:flex-col  gap-10 w-full max-container "
    >
      <div className="flex flex-1 flex-col">
        <h2 className="capitalize mt-10 font-palanquin text-4xl  font-bold lg:max-w-lg">
          La <span className="text-pink-500/50">Mejor</span>
          <br />
          <span className="inline-block mt-5">
            Calidad de <span className="text-pink-500/50">Zapatillas</span>
          </span>
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
        <div className="mt-11">
          <button
            className="bg-pink-500/50 flex items-center hover:bg-pink-500/90 duration-300
             justify-center border px-7 py-3 font-montserrat text-lg leading-none rounded-full text-white "
          >
            Ver Más
          </button>
        </div>
      </div>

    <div className="flex-1 flex justify-center items-center">
        <img
        width={621}
        height={522}
         src={shoe8} alt="Zapatilla-img" className="cursor-pointer duration-500 hover:scale-90 object-contain" />
    </div>

    </section>
  );
};

export default SuperQuality;
