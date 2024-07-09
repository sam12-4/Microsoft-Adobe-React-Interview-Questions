import React, { useEffect, useState } from 'react'

const loadMore = () => {
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const[productCount, stProductCount] = useState(10)

    const fetchProducts = async () => {
        setLoading(true)
        try {
            let response = await fetch(`https://dummyjson.com/products?limit=${count==0? productCount : productCount*count}&skip=${count * 10}`)
            let data = await response.json()
            console.log();
            setProducts(data)
        } catch (error) {
            setError("Data not found", error.message)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    
  return (
        <>
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        <div className='grid'>
            {products && products.map((product, index) => (
                <div key={index} className='card'>
                    <img src={product.images[0]} alt={product.title} />
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
        <button onClick={() => setCount(count + 1)}>Load More</button>
        </>
  )
}

export default loadMore
