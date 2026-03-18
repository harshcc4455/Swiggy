import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import FoodOption from "./Components/FoodOption";
import GroceryOption from "./Components/GroceryOption";
import DineOPtion from "./Components/DineOption";
import Restaurant from "./Components/Restaurant";

function App(){

    return(
        <>
        <Header></Header>
        <FoodOption></FoodOption>
        <GroceryOption></GroceryOption>
        <DineOPtion></DineOPtion>
        <Restaurant></Restaurant>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);