import { useState } from "react";

export default function MenuCard({ section, restaurant }) {
  const [isOpen,setIsOpen]=useState(true) ;

  if(!isOpen){
    return(
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="text-3xl font-bold mb-4">{section.title}</p>
          <button
            className="text-5xl font-bold mr-10"
            onClick={()=>setIsOpen(!isOpen)}
          >
            {isOpen?'˄':'˅'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>

      <div className="flex justify-between w-full">
        <p className="text-3xl font-bold mb-4">
          {section.title} ({section.items.length})
        </p>
        <button
          className="text-5xl font-bold mr-10"
          onClick={()=>setIsOpen(!isOpen)}
        >
          {isOpen?'˄':'˅'}
        </button>
      </div>

      {section.items.map((item, index) => (

        <div
          key={index}
          className="flex justify-between border-b pb-6 mb-6"
        >

          <div className="w-[70%]">

            <div className="w-4 h-4 border border-green-600 flex items-center justify-center mb-2">
              <div className="w-2 h-2 bg-green-600"></div>
            </div>

            <h3 className="font-semibold text-lg">
              {item}
            </h3>

            <p className="text-gray-700">
              ₹{(index + 1) * 79}
            </p>

            <p className="text-green-600 text-sm">
              ★ {restaurant.rating}
            </p>

            <p className="text-gray-500 text-sm mt-2">
              Delicious {item} made with chef special spices.
            </p>

          </div>

          <div className="flex flex-col items-center">

            <img
              src={restaurant.image}
              className="w-32 h-24 object-cover rounded-lg"
            />

            <button className="mt-2 border px-6 py-1 rounded-lg text-green-600 font-semibold shadow">
              ADD
            </button>

          </div>

        </div>

      ))}

    </div>
  );
}