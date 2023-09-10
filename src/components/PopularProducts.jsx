import shoe4 from "../assets/shoe4.svg"
import shoe5 from "../assets/shoe5.svg"
import shoe6 from "../assets/shoe6.svg"
import shoe7 from "../assets/shoe7.svg"
import PopularProductCard from "./PopularProductCard";


const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];

const PopularProducts = () => {
  return (
    <section id="productos" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Productos <span className="text-pink-500/50">Populares</span></h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est sed
          officiis praesentium atque doloribus quaerat error reprehenderit
          facere!
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-6 gap-14">
        {
          products.map((product, index) => (
            <PopularProductCard key={index} {...product} />
          ))
        }
      </div>
    </section>
  );
};

export default PopularProducts;
