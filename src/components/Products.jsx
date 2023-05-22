import Card from './Card';
import useSWR from 'swr'
import { MdSearch } from 'react-icons/md';
import { useEffect, useState } from 'react';

const Products = () => {
  
  // const fetcher = (...args) => fetch(...args).then(res => res.json());
  // const { data, error, isLoading } = useSWR('https://fakestoreapi.com/products', fetcher)
   
   const [data,setData]=useState([]);
   const [query,setQuery]=useState(data);
  useEffect(()=>{
    const getData = async()=>{
      const res= await fetch("https://fakestoreapi.com/products");
      const result= await res.json();
      setData(result);
      setQuery(result);
    }
    getData();
  },[])
  // if (error) return <div>failed to load</div>
  // if (isLoading) return <div className='text-center text-2xl '>Loading...</div>
 const onFilterHandler = (event)=>{
  setQuery(data.filter(f=>f.title.toLowerCase().includes(event.target.value)))
 
 }
 
  return (
    <>
    <h1 className='text-left text-3xl py-4 '>Products </h1>
    <div className='text-center pb-8 px-44 flex '>
      <span className='border px-2 flex items-center justify-center '><MdSearch className='text-2xl'/></span>
      <input type="search" name="search" id="search" className='border w-full py-1 px-2 outline-none ' placeholder='Search here...' onChange={onFilterHandler} />

    </div>
   <div className='flex flex-wrap items-center justify-center gap-5 '>
    {
      query?.map((product)=>{
        return(
          <div key={product.id}>
          <Card image={product.image } title={product.title} price={product.price} />
          </div>
        );
      })
    }
   </div>
    </>
  )
}

export default Products


