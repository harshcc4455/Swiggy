import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";

export default function Restaurant() {
  const [RestData, setRestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();

        setRestData(data.recipes || []);
      } catch (err) {
        console.error("Error:", err);
      }
    }

    fetchData();
  }, []);

if(RestData.length==0){
  return(
    <Shimmer></Shimmer>
  )
}

  return (
    <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
      {RestData.map((restInfo) => (
        <RestCard key={restInfo.id} restInfo={restInfo} />
      ))}
    </div>
  );
}