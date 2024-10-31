import { ComplexNavbar } from "../components/Navbar";
import SidebarWithContentSeparator from "../components/Sidebar";
import HomeCard from "../components/HomeCard";

function Home() {
    return (

        <div className=" h-screen w-full flex flex-row">
          <SidebarWithContentSeparator/>
          <div className="w-full">
          <ComplexNavbar/>
          <HomeCard/>
          </div>
        </div>
        
    );
}

export default Home;
