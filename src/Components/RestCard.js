import { Link } from "react-router-dom";

export default function RestCard({ restInfo }) {
  return (
    <Link to={`/city/delhi/${restInfo.id}`}>
      <div className="w-70 transition transform duration-200 hover:scale-95">

        <img
          className="w-full h-40 object-cover rounded-lg"
          src={restInfo.image}
          alt="food"
        />

        <h3 className="font-bold mt-2">{restInfo.name}</h3>

        <p className="flex items-center gap-1">
          ⭐ {restInfo.rating} • {restInfo.cookTimeMinutes} mins
        </p>

        <p className="text-sm text-gray-500">
          {Array.isArray(restInfo.cuisine)
            ? restInfo.cuisine.join(", ")
            : restInfo.cuisine}
        </p>

      </div>
    </Link>
  );
}