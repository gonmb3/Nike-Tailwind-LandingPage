import customer1 from "../assets/customer1.jpeg"
import customer2 from "../assets/customer2.svg"
import ReviewCard from "./ReviewCard";

export const reviews = [
  {
      imgURL: customer1,
      customerName: 'Juan Brown',
      rating: 4.5,
      feedback: " Lorem ipsum dolor sit amet consectetur adipisicing elittetur adipisic!"
  },
  {
      imgURL: customer2,
      customerName: 'Lola Mendez',
      rating: 4.5,
      feedback: " Lorem ipsum dolor sit amet consectetur adipisicing elittetur adipisic!"
  }
];

const CustomerReviews = () => {
  return (
    <section className='max-container'>
        <h3 className='font-palanquin text-center text-4xl font-bold'>
          Que Dicen Nuestros
          <span className='text-pink-500/50'> Clientes?</span>
        </h3>
        <p className='info-text m-auto mt-4 max-w-lg text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {
          reviews.map((rev, index) => (
            <ReviewCard
            key={index}
            imgURL={rev.imgURL}
            name={rev.customerName}
            rating={rev.rating}
            feedback={rev.feedback}
             />
          ))
        }
        </div>
    </section>
  )
}

export default CustomerReviews