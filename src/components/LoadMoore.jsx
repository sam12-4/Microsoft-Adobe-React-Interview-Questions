
import React, { useEffect, useState } from 'react'

const LoadMoore = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const[productCount, stProductCount] = useState(10)

    const fetchProducts = async () => {
        setLoading(true)
        try {
            let api = `https://dummyjson.com/products?limit=${count==0? productCount : productCount*(count+1)}&skip=${count * 10}`
            console.log(api);
            let response = await fetch(api)
            let data = await response.json()
            console.log();
            setProducts(prev=>[...prev, ...data.products])
        } catch (error) {
            setError("Data not found", error.message)
        }
        finally {
            console.log(products);
            console.log(products.length);
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [count])

    useEffect(() => {
        setProducts([])
    }, [])
    
  return (
        <>
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        <div className='grid'>
            {products && products.map((product, index) => (
                <div key={index} className='card'>
                    <img src={product.images[0]} width={200} alt={product.title} />
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
        {products.length<100 && <button onClick={() => setCount(count + 1)}>Load More</button>}
        {products.length == 100 && <h1>No more products to load</h1>}
        </>
  )
}

export default LoadMoore
