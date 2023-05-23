import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import './CategoryContainer.css'
import {nanoid} from 'nanoid'



export default function CategoryContainer({category,products}){
    const[productsToRender, setProductsToRender] = useState(setNumberOfProduct())
    const navigate = useNavigate()
    function setNumberOfProduct(){
        const windowWidth= parseInt(document.documentElement.clientWidth)
        // if(windowWidth > 900 ) return 5;
        if(windowWidth > 1060 ) return 4;
        if(windowWidth > 800 ) return 3;
        if(windowWidth > 550 ) return 2;
        return 1
    }
    window.addEventListener('resize',()=> {
        setProductsToRender(setNumberOfProduct())
    })
    const imagesToRender = [... products]
    imagesToRender.length = productsToRender
    const images = imagesToRender.map(
        product=><ProductCard {...product}/>
    )
    return(<>
        <div className="categorie-container">
            <header className="category-name" onClick={()=> navigate(`${category}`)}>{category}</header>
            <div className="products-container">
                {images}
            </div>
        </div>

        </>
    )
}