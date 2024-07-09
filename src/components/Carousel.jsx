import React, { useEffect, useState } from 'react'
import { BsArrowRightCircle, BsArrowLeftCircle, BsCircleFill } from 'react-icons/bs'

const Carousel = ({ url, limit, page }) => {
    const [images, setImages] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [currentImage, setCurrentImage] = useState(0)

    const fetchImages = async (url, page, limit) => {
        setLoading(true)
        try {
            let response = await fetch(`${url}?page=${page}&limit=${limit}`)
            let data = await response.json()
            console.log();
            setImages(data)
        } catch (error) {
            setError("Data not found", error.message)
        }
        finally {
            setLoading(false)
        }
    }

    const setPrevious = () => {
        if (currentImage == 0) {
            setCurrentImage(images.length - 1)
        }
        else setCurrentImage(currentImage - 1)
        console.log(currentImage);
    }
    const setNext = () => {
        if (currentImage == images.length - 1) {
            setCurrentImage(0)
        }
        else setCurrentImage(currentImage + 1)
        console.log(currentImage);
    }

    useEffect(() => {
        if (url) {
            setError(null)
            setImages([])
            setCurrentImage(0)
            fetchImages(url, page, limit);
            console.log(images);
        }
        else { setError("Please provide a valid url") }
    }, [url, page, limit])

    return (
        <div className='carousel'>
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            <div className='relative'>
                <BsArrowLeftCircle className='left-arrow' onClick={setPrevious} />
                <BsArrowRightCircle className='right-arrow' onClick={setNext} />
                <div className='h-100'>
                    {images && images.map((image, index) => (
                        <img key={index} src={image.download_url} alt={image.author} className={index == currentImage ? "image" : "none"} />
                    ))}
                    {images && images.map((_, index) => (
                        <BsCircleFill onClick={()=>{setCurrentImage(index)}} key={index} className={index == currentImage ? "circle grey" : "circle"} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel
