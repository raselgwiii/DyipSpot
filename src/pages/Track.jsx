import { ComplexNavbar } from "../components/Navbar";
import pin  from "../assets/pin3.png"
import Map, {Marker} from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
function Track() {
    return (

                <div className="absolute   overflow-hidden h-full  w-full">
                    <Map
                        mapboxAccessToken="pk.eyJ1IjoiamlvdmFuaTEyMyIsImEiOiJjbHl5ZDZhbzcxY2s3Mm5zbG1taWZ1MDBjIn0.1nOWIuN47R6lsU1QXp40KQ"
                        initialViewState={{
                            longitude: 120.44945048835295,
                            latitude: 16.931683021499,
                            zoom: 17,
                            bearing: 0,
                            pitch: 60,
                        }}
                        mapStyle="mapbox://styles/mapbox/standard"  // Corrected style
                    >

                        <Marker longitude={120.44945048835295} anchor={"bottom"}  color={"green"} latitude={16.931683021499}>
                            <img alt={"defimahe"} src={pin}/>
                        </Marker>
                    </Map>





        </div>
    );
}

export default Track;
