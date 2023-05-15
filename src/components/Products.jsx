import Card from './Card';
import useSWR from 'swr'

const Products = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const { data, error, isLoading } = useSWR('https://fakestoreapi.com/products', fetcher)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div className='text-center text-2xl '>Loading...</div>
  return (
    <>
    <h1 className='text-left text-3xl py-4 '>Products </h1>
   <div className='flex flex-wrap items-center justify-center gap-5 '>
    {
      data?.map((product)=>{
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


