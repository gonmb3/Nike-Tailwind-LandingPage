import star from "../assets/star.svg"

const ReviewCard = ({imgURL,name, rating, feedback}) => {
    
  return (
    <div className='flex justify-center items-center flex-col'>
    <img src={imgURL} alt={name} className='rounded-full object-cover w-[120px] h-[120px]'/>
    <p className="mt-6 max-w-sm text-center info-text">{feedback} </p>
    <div className="mt-3 flex justify-center items-center gap-2.5">  
        <img src={star} alt="start" className="object-contain m-0" />
        <p className="text-xl font-montserrat text-slate-400">({rating}) </p>
    </div>
    <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{name} </h3>
    </div>
  )
}

export default ReviewCard