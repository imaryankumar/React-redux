import Products from '@/components/Products'
import React from 'react'

const Home = () => {
  return (
    <div className='px-10'>
    <h1 className='text-left text-3xl pt-4 '>
      Welcome to the Redux Toolkit Store
    </h1>
    <Products />
    </div>
  )
}

export default Home