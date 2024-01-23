import React, { useEffect, useState } from 'react'
import Card from '../Card'
import './index.scss'
const Product = () => {

    const [product, setProduct] = useState([])

    async function getProduct() {
        const data = await fetch("http://localhost:3000/sons")
        const res = await data.json()
        setProduct(res)
    }
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <>
            <section id='Product'>
                <div className="SectionArea">
                    <div className="Popul">
                        <h1>Popular Items</h1>
                          </div>
                        <div className="Lorem">
                            <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        </div>

                  
                    <div className="CardinArea">
                        <div className="Cardino">
                             {product && product.map((item) => (
                            <Card key={item._id} id={item._id} image={item.image} text={item.text} price={item.price} product={item}/>
                        ))}
                        </div>
                       
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product