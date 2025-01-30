import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../Card/Card";


const Gadget = () => {
    const {category} = useParams()


     const [products, setProducts] =  useState([])
     const [filterProducts, setFilterProducts] =  useState([])
    
     useEffect(()=>{
        fetch('../product.json')
            .then(res => res.json())
            .then(data=> setProducts(data))
            .catch(error => console.error('error=', error))

     },[])

     useEffect(()=>{
        if(category){
            const filterProducts = products.filter(product => product.category === category)
            setFilterProducts(filterProducts)
        }
        else{
            setFilterProducts(products.slice(0,6))
        }

     },[category, products])



    return (
        <div>
            <div className="gadget-container grid grid-cols-3 gap-5">
                {
                    filterProducts.map(product=><Card key={product.product_id} product={product}></Card>)
                }
            </div>
        </div>
    );
};

export default Gadget;