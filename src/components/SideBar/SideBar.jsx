import { NavLink } from 'react-router';
import PropTypes from 'prop-types'; // ES6

const SideBar = ({categories}) => {
    return (
        <div>
            <div className='sidebar-container bg-white shadow p-5 flex flex-col gap-5 rounded-2xl'>

            <NavLink to={'/'}><button className='btn btn-wide bg-color-02 color-02 font-semibold text-lg border-none rounded-3xl'>All Products</button></NavLink>
                {
                    categories.map(category =>  (
                        <NavLink key={category.id} to={`/category/${category.category}`}><button className='btn btn-wide bg-color-02 color-02 font-semibold text-lg border-none rounded-3xl'>{category.category}</button></NavLink>
                    ))
                }


            </div>
        </div>
    );
};

SideBar.propTypes = {
    categories: PropTypes.array
}

export default SideBar;