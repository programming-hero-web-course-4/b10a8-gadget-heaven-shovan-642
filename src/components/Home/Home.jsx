import { useEffect } from "react";
import ExploreGadget from "../ExploreGadget/ExploreGadget";



const Home = () => {
    useEffect(()=>{
        document.title = "Home Page"
    },[])
    return (
        <div>
           <ExploreGadget>
            
           </ExploreGadget>
        </div>
    );
};

export default Home;