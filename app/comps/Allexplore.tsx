import Exploredesc from "./Exploredescription";
import ExploreProds from "./Exploreprods";
import ViewAll from "./ViewAll";

const AllExplore = () => {
    return ( <div className="flex flex-col items-center gap-10">
        <Exploredesc/>
        <ExploreProds/>
        <ViewAll/>
        <img src="https://i.ibb.co/yd4cNfv/Frame-740.png" alt="" />
    </div> );
}
 
export default AllExplore;