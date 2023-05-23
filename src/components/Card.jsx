import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../feature/counter/counterSlice'
const Card = ({image,title,price}) => {
  const dispatch = useDispatch()
 
  return (
    <div className='w-96 h-60 shadow flex flex-col items-center justify-evenly text-center   '>
        <img src={image} alt="poster" className='w-40 h-24  py-2 ' />
        <h4 className='text-xs'>{title}</h4>
        <h5 className='text-xl'>{price}</h5>
    <div>
    <button className='px-3 py-1 bg-red-500 cursor-pointer border rounded text-white ' onClick={() => dispatch(decrement())}>-</button>
    <button className='px-3 py-1 bg-violet-500 cursor-pointer border rounded text-white ' >Add to cart</button>
    <button className='px-3 py-1 bg-red-500 cursor-pointer border rounded text-white ' onClick={() => dispatch(increment())}>+</button>
    </div>
 
    </div>
  )
}

export default Card