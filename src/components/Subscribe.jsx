import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Subscribe = () => {
  return (
    <section className='max-container flex justify-between items-center max-lg:flex-col gap-10' id='contacto'>
        <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
          Registrate y 
          <span className='text-pink-500/50'> Recibe las Ultimas </span>
          Noticias
        </h3>

        <div className="lg:max-w-[55%]  w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-400 rounded-full">
          <input type="text" placeholder='subscribete@nike.com' className='input'/>

          <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <button className="bg-pink-500/50 flex items-center w-full hover:bg-pink-500/90  duration-300
             justify-center border px-7 py-3 font-montserrat text-lg leading-none rounded-full text-white ">
              Registrate  
              <AiOutlineArrowRight className="text-pink-500/50 ml-2 bg-white p-1 rounded-full "  size={25}/>
               </button>
          </div>

        </div>
    </section>
  )
}

export default Subscribe