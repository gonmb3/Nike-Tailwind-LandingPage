import React from 'react'

const ShoeCard = ({shoeUrl, changeBigShoeImage, bigShoeImage}) => {

    const handleClick = () => {
        if(bigShoeImage !== shoeUrl){
            changeBigShoeImage(shoeUrl.bigShoe)
        }
    }

  return (
    <div className={`border-2
     rounded-xl ${bigShoeImage === shoeUrl.bigShoe ? "border-pink-500/50" : "border-transparent"}
     cursor-pointer max-sm:flex-1`}
     onClick={handleClick}
     >

      <div className="flex justify-center items-center bg-card bg-gray-300 rounded-xl sm:w-40 sm:h-40  max-sm:p-4">
            <img src={shoeUrl.img} alt="coleccion zapatillas" width={127} height={105}  className='object-contain'/>
        </div>  
    </div>
  )
}

export default ShoeCard