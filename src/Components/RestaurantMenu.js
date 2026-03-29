import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";

export default function RestaurantMenu() {

  const { id } = useParams();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {

    async function fetchData() {

      const response = await fetch(
        `https://dummyjson.com/recipes/${id}`
      );

      const data = await response.json();

      setRestaurant(data);

    }

    fetchData();

  }, [id]);


  if (!restaurant) {

    return <h2>Loading...</h2>;

  }


  /* Section Data */

  const menuSections = [
    {
      title: "Recommended",
      items: restaurant.ingredients
    },
    {
      title: restaurant.cuisine + " Specials",
      items: restaurant.ingredients.slice(0, 3)
    },
    {
      title: "Chef's Choice",
      items: restaurant.ingredients.slice(3, 6)
    }
  ];


  return (

    <div className="w-[70%] mx-auto mt-10">

      {/* Header */}

      <img
        src={restaurant.image}
        className="w-full h-80 object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-4">
        {restaurant.name}
      </h1>

      <p className="mt-2 text-gray-600">
        ⭐ {restaurant.rating} • ⏱ {restaurant.cookTimeMinutes} mins
      </p>

      <p className="text-gray-500">
        🍽 {restaurant.cuisine}
      </p>


      {/* Section Renderer */}

      {menuSections.map((section, index) => (

        <MenuCard
          key={index}
          section={section}
          restaurant={restaurant}
        />

      ))}

    </div>

  );

}