import truckFast from "../assets/truck-fast.svg"
import shieldTick from "../assets/shield-tick.svg";
import support from "../assets/support.svg";
import ServiceCard from "./ServiceCard";

const Services = () => {

   const services = [
    {
        imgURL: truckFast,
        label: "Envios Gratis",
        subtext: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        imgURL: shieldTick,
        label: "Pagos Seguros",
        subtext: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        imgURL: support,
        label: "Nos Encanta Ayudarte",
        subtext: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
];

  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      {
        services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        
        ))
      }
    </section>
  )
}

export default Services