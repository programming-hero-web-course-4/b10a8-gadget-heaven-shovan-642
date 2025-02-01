
import { IoClose } from "react-icons/io5";


const StoredCart = ({ list }) => {


    const { product_title, product_image, price, description } = list
    return (
        <div>


            <div className="cart-container flex justify-between bg-white p-5 rounded-xl items-center">

                <div className="flex gap-5">
                    <div className="image">
                        <img className="w-[200px] h-[124px] rounded-xl" src={product_image} alt="" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <h3 className="font-bold text-xl">{product_title}</h3>
                        <p className="color-02">{description}</p>
                        <p className="color-04 font-bold">Price: ${price}</p>
                    </div>
                </div>
                <div className="">
                    <button className="border border-red-600 text-red-600 p-3 rounded-full"><IoClose /></button>
                </div>
            </div>
        </div>
    );
};

export default StoredCart;