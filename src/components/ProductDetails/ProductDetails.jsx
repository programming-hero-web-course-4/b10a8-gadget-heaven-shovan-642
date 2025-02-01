import { useParams } from "react-router";
import BannerImgTwo from "../BannerImgTwo/BannerImgTwo";
import { useEffect, useState } from "react";
import HeaderOther from "../HeaderOther/HeaderOther";


const ProductDetails = () => {

    useEffect(()=>{
        document.title = "Product Details"
    },[])
    

    const {productID} = useParams()
   

    const [product, setProduct] = useState(null)



         useEffect(()=>{
            fetch('/product.json')
                .then((res) => res.json())
                .then((data)=> {
                    const product = data.find((product)=> product.product_id === productID)
                    setProduct(product)
                })             
                .catch(error => console.error('error=', error))

         },[productID])

         console.log( typeof productID, product)



    return (
        <div>
            <HeaderOther></HeaderOther>

            <div className="relative top-[-150px]">
                
                
                <BannerImgTwo product={product} productID={productID}></BannerImgTwo>
            </div>
            
        </div>
    );
};

export default ProductDetails;