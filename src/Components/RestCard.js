export default function RestCard({ restInfo }) {
  return (
    <div className="w-70">
      <img
        className="w-full h-40 object-cover rounded-lg"
        src={restInfo.image}
        alt="food"
      />
      <h3 className="font-bold mt-2">{restInfo.name}</h3>
      <p>⭐ {restInfo.rating} • {restInfo.cookTimeMinutes} mins</p>
      <p className="text-sm text-gray-500">
        {Array.isArray(restInfo.cuisine)
          ? restInfo.cuisine.join(", ")
          : restInfo.cuisine}
      </p>
    </div>
  );
}