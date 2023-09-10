import {AiOutlineArrowRight} from "react-icons/ai"
import thumbnailShoe1 from "../assets/big-shoe1.png"
import thumbnailShoe2 from "../assets/big-shoe2.png"
import thumbnailShoe3 from "../assets/big-shoe3.png"
import bigShoe1 from  "../assets/thumbnail-shoe1.svg"
import bigShoe2 from   "../assets/thumbnail-shoe2.svg"
import bigShoe3 from   "../assets/thumbnail-shoe3.svg"
import ShoeCard from "./ShoeCard"
import { useState } from "react"

const statistics = [
  { value: '1k+', text: 'Marcas' },
  { value: '500+', text: 'Compras' },
  { value: '250k+', text: 'Clientes' },
];

const shoes = [
{
    img: thumbnailShoe1,
    bigShoe: bigShoe1,
},
{
    img: thumbnailShoe2,
    bigShoe: bigShoe2,
},
{
    img: thumbnailShoe3,
    bigShoe: bigShoe3,
},
];


const Hero = () => {

  const [bigShoeImage, setBigShoeImage]  = useState(bigShoe1);

  return (
    <section
      id="inicio"
      className="w-full flex xl:flex-row 
       flex-col justify-center min-h-screen 
       gap-10 max-container"
       >
        <div className="relative xl:w-2/5 flex-col justify-center items-start w-full max-xl:padding-x pt-28">
              <p className="capitalize text-xl font-montserrat text-pink-500/50">Nuestra colección de verano</p>
              <h2 className="capitalize mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold"
              >
                <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">Nuevos Arrivos!</span>
                <br />
                <span className="text-pink-500/50 inline-block mt-5">Zapatillas Nike</span>
              </h2>
              <p className="font-montserrat text-slate-400 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Quas soluta alias 
                eaque aut.
              </p>

    
            <button className="bg-pink-500/50 hover:bg-pink-500/90 duration-300 flex items-center
             justify-center border px-7 py-3 font-montserrat text-lg leading-none rounded-full text-white ">
              Comprar  
              <AiOutlineArrowRight className="text-pink-500/50 ml-2 bg-white p-1 rounded-full "  size={25}/>
               </button>

               <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {
            statistics.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                <p className="leading-7 font-montserrat text-slate-400">{stat.text} </p>
              </div>
            ))
          }
               </div>
             
        </div>  

        <div className="relative flex-1 flex justify-center items-center x:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img
          width={610}
          height={500}
          className="object-contain relative z-10 hover:rotate-12 duration-700 cursor-pointer"
           src={bigShoeImage} 
          alt="zapatillas coleccion"
         />
         <div className="flex  sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[18%] max-sm:px-6">
          
            {
              shoes.map((shoe, index) => (
                <ShoeCard shoeUrl={shoe} key={index} changeBigShoeImage={(shoe) => {
                  setBigShoeImage(shoe)
                }} bigShoeImage={bigShoeImage} />
              ))
            }
         </div>
        </div>

    </section>
  );
};

export default Hero;
