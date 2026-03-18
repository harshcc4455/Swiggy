import dineoutRestaurants from "../Utils/DineData"
import DineCard from "./DineCard";
export default function DineOPtion(){
    return(
        <div className="w-[80%] mx-auto mt-20 mb-20">
            <p className="text-2xl font-bold">Disco ver best restaurants on Dinout</p>
            <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4">
                {
                    dineoutRestaurants.map((RestData)=><DineCard  key={RestData?.info?.id} RestData={RestData}></DineCard> )
                }
            </div>
        </div>
    )
}