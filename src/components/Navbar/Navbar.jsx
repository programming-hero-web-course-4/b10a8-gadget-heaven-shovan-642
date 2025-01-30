import { NavLink } from "react-router";
import Banner from "../Banner/Banner";
import BannerImg from "../BannerImg/BannerImg";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import './Navbar.css'


const Navbar = () => {

  const menuLinks = <>
                      <li><NavLink to={"/"}>Home</NavLink></li>
                      <li><NavLink to={"statistics"}>Statistics</NavLink></li>
                      <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
  </>
  return (
    <div className="m-9">

      <div className="border border-gray-200 rounded-3xl p-3">

        <div className='navbar-container bg-color-01 rounded-3xl text-white'>

          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {menuLinks}
                </ul>
              </div>
              <a className="btn btn-ghost text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {menuLinks}
              </ul>
            </div>
            <div className="navbar-end flex gap-4 mr-5">
                <div className="border border-gray-200 rounded-full bg-white color-03 font-bold co p-2"><BsCart3 /></div>
                <div className="border border-gray-200 rounded-full bg-white color-03 font-bold co p-2"><FaRegHeart /></div>
            </div>
          </div>


          <Banner></Banner>





        </div>

      </div>
      <div className="relative top-[-200px]">
        <BannerImg></BannerImg>
      </div>

    </div>
  );
};

export default Navbar;