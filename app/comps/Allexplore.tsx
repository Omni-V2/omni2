import Exploredesc from "./Exploredescription";
import ExploreProds from "./Exploreprods";
import ViewAll from "./ViewAll";

const AllExplore = () => {
    return ( <div className="flex flex-col items-center gap-10">
        <Exploredesc/>
        <ExploreProds/>
        <ViewAll/>
    </div> );
}
 
export default AllExplore;