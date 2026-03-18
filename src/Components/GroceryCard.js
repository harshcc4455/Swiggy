export default function GroceryCard({foodData}){

return(
<div className="flex-none">
<a href={foodData?.action?.link}>
<img
className="w-40 h-50 object-cover "
src={foodData.image }
/>
</a>

<h2 className="text-center font-bold ">{foodData?.action.text}</h2>
</div>
)
}