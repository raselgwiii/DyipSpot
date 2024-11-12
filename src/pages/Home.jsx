import {ComplexNavbar} from "../components/Navbar";
import JeepLogs from "../components/JeepLogs";
import Carousel from "../components/HomeComponents/Carousel";
import 'mapbox-gl/dist/mapbox-gl.css';
import {Typography} from "@material-tailwind/react";

function Home() {
    return (
        <div className=" w-full h-full   pt-4  flex-col flex  flex-1 ">
           <div>
               <Typography className="px-10 PlusJakartaSans-Bold text-3xl" color="blue-gray" >
                   Hi Russel Gue Caponga
               </Typography>
               <Typography className="px-10 PlusJakartaSans-Medium" color="grey">
                   Lets Track Your ride!
               </Typography>
           </div>


                <Carousel/>
        
          

        </div>
    );
}

export default Home;
