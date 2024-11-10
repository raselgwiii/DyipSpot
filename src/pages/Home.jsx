import {ComplexNavbar} from "../components/Navbar";
import JeepLogs from "../components/JeepLogs";
import Carousel from "../components/HomeComponents/Carousel";
import 'mapbox-gl/dist/mapbox-gl.css';
import {Typography} from "@material-tailwind/react";

function Home() {
    return (
        <div className=" w-full h-full pt-10  flex-col flex ">
           <div>
               <Typography className="px-10 PlusJakartaSans-Bold text-3xl" color="blue-gray" >
                   Hi Russel Gue Caponga
               </Typography>
               <Typography className="px-10 PlusJakartaSans-Medium" color="grey">
                   Lets Track Your ride!
               </Typography>
           </div>

            <div className="h-full ">

                <Carousel/>
            </div>
            {/*<div className="px-10 h-full">*/}

            {/*    <JeepLogs/>*/}
            {/*</div>*/}

        </div>
    );
}

export default Home;
