import { Outlet, useLocation, useParams } from "react-router";
import Footer from "../Footer/Footer";
import './Root.css'
import HeaderHome from "../HeaderHome/HeaderHome";
import Navbar from "../Navbar/Navbar";



const Root = () => {

    const {category} = useParams()
    const location = useLocation()
    const isHome = location.pathname === "/";
    const categoryHome= location.pathname === `/category/${category}`

    return (
        <div className="w-[1540px]">
            {
                isHome || categoryHome ? <HeaderHome></HeaderHome>:<Navbar></Navbar>
            }
           
           
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;