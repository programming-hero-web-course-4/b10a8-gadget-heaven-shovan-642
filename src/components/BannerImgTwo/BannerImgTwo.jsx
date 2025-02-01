import { BsCart3 } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import ReactStarsRating from 'react-awesome-stars-rating';
import { addToStoredCartList, addToStoredWishList } from '../Utility/addToDb';

const BannerImgTwo = ({ product, productID }) => {

  if (!product) {
    return
  }

  console.log(product)

  const { product_title, price, availability, description, specification, rating, product_image } = product

  const handleRatingChange = (value) => {
    console.log(`React Stars Rating value is ${value}`);
  };

  const handleAddToCart = (id)=>{
      addToStoredCartList(id)
  }

  const handleAddToWish = (id)=>{
      addToStoredWishList(id)
  }



  return (
    <div className='w-5xl mx-auto'>
      <div className='border border-white rounded-3xl p-4' style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>

        <div className='rounded-3xl overflow-hidden'>
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={product_image}
                className="max-w-md min-h-screen rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-3xl font-bold pb-3">{product_title}</h1>
                <p className="color-04 font-bold">Price:$ {price}</p>
                <p className="color-02">{description}</p>
                <h1 className='font-xl font-bold py-2'>Specification: </h1>
                <ul className='color-02 list-decimal pl-5'>
                  {
                    specification.map((spec, idx)=><li key={idx}>{spec}</li>)
                  }
                </ul>

                <h1 className='font-xl font-bold py-2'>Rating:  </h1>

                <div className='flex gap-5 items-center'>
                <ReactStarsRating
                  className="flex pb-2"
                  onChange={handleRatingChange}
                  value={rating}
                  ></ReactStarsRating>
                  <div className='p-3 bg-color-02 rounded-4xl'>{rating}</div>
                </div>


                <div className='flex gap-3'> 
                <button onClick={()=>handleAddToCart(productID)} className="btn bg-color-01 text-white border-none rounded-4xl px-7">Add to Card <span className="text-white font-bold text-xl"><BsCart3/></span></button>
                <div onClick={()=>handleAddToWish(productID)} className="border border-gray-200 rounded-full bg-white color-03 font-bold p-3"><FaRegHeart /></div>
                </div>

                                
 
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default BannerImgTwo;