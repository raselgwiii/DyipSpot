import { ComplexNavbar } from "../components/Navbar";
import JeepLogs from "../components/JeepLogs";

import 'mapbox-gl/dist/mapbox-gl.css';
function Home() {
    return (
      <div className="h-full pt-1 flex overflow-hidden">
        <JeepLogs/>
      </div>
    );
}

export default Home;
