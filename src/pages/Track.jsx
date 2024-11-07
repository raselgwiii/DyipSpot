import { ComplexNavbar } from "../components/Navbar";
import pin  from "../assets/pin3.png"

import RenderMap from "../components/Map"
import RenderJeeps from "../components/TrackComponents/RenderJeeps.jsx";
import CategoryButtons from "../components/TrackComponents/CategoryButtons.jsx";
function Track() {
    return (

                <div style={{userSelect: 'none'}}   className=" flex   overflow-hidden h-full  w-full">

                 <RenderMap/>


<div className="absolute  w-full bottom-5 ">

    <RenderJeeps/>

</div>

                    <div className="absolute  w-full top ">

                        <CategoryButtons/>

                    </div>

        </div>
    );
}

export default Track;
