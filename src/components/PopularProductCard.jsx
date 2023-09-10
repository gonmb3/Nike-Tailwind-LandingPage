import star from "../assets/star.svg"

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} alt={name}
        className='w-[280px] h-[280px] cursor-pointer hover:scale-105 duration-500'
         />
         <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="rating" width={24} height={24} className="" />
            <p className="font-montserrat text-xl leading-normal text-slate-400">(4.5) </p>
         </div>
         <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
            <p>${price} </p>
    </div>
  )
}

export default PopularProductCard