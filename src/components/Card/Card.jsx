import PropTypes from 'prop-types';
import { Link } from 'react-router';
const Card = ({product}) => {

    const { product_id, product_title, product_image, price}= product
    return (
        <div>
            <div className="single-card  bg-white p-3 rounded-xl">
                <div className="card">
                    <figure>
                        <img className='w-[280px] h-[180px] rounded-xl'
                            src={product_image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body pl-0 pb-3">
                        <div className='pb-3'>
                        <h2 className="card-title font-2xl font-bold">{product_title}</h2>
                        <p className='color-02 font-xl font-semibold'>Price: ${price}</p>
                        </div>
                        <div className="card-actions justify-start">
                            <Link to={`product/${product_id}`}><button className="btn btn-outline border border-color-01 color-01 rounded-3xl">View Details</button></Link>
                        </div>
                        <div>
                </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


Card.propTypes={
    product: PropTypes.object

}
export default Card;