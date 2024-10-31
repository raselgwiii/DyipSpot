import { ComplexNavbar } from "../components/Navbar";
import SidebarWithContentSeparator from "../components/Sidebar";

import Map from "react-map-gl";
function Home() {
  return (
    <div className=" flex flex-row">
          <SidebarWithContentSeparator/>
<div className="w-full">
     <ComplexNavbar/>
      <Map
      mapboxAccessToken="pk.eyJ1IjoiamlvdmFuaTEyMyIsImEiOiJjbHl5ZDZhbzcxY2s3Mm5zbG1taWZ1MDBjIn0.1nOWIuN47R6lsU1QXp40KQ"
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      className='w-full'
      mapStyle="mapbox://styles/mapbox/standard"
    />

</div>

    </div>
  );
}

export default Home;
