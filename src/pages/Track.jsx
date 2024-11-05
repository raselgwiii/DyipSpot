import { ComplexNavbar } from "../components/Navbar";
import pin  from "../assets/pin3.png"
import 'react-spring-bottom-sheet/dist/style.css'
import RenderMap from "../components/Map"
import RenderJeeps from "../components/TrackComponents/RenderJeeps.jsx";
function Track() {
    return (

                <div style={{userSelect: 'none'}}   className=" flex   overflow-hidden h-full  w-full">

                 <RenderMap/>


<div className="absolute  w-full bottom-10 ">

    <RenderJeeps/>

</div>

        </div>
    );
}

export default Track;
