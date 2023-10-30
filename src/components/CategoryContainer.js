import { useState, Suspense } from "react"
import { useNavigate, Await } from "react-router-dom";
import ProductCard from "./ProductCard";
import './CategoryContainer.css'
import {nanoid} from 'nanoid'
import { getProductsByCategory } from "../utils/fetcher"; 
import ProductCardSkeleton from "./ProductCardSkeleton";

export default function CategoryContainer({category}){
    const nbreOfItemToRender = 4
    const navigate = useNavigate()
    
    const cardSkeletons = (numberToRender)=>{
        const skeletons = []
        for(let i = 0; i < numberToRender; i++){
            skeletons.push(<ProductCardSkeleton key={i}/>)
        }
        return skeletons
    }
        products = Object.values(products)
        products.length = nbreOfItemToRender
        const cards = products.map(
            product=> <ProductCard key={nanoid()}  {...product}/>
        )
        return cards
    }
    return(<>
        <div className="category-container">
            <header className="category-name" onClick={()=> navigate(`category/${category}`)}>{category.toUpperCase()}</header>
            <div className="products-container">
                <Suspense fallback={<Spinner />}>
                    <Await resolve={getProductsByCategory(category)}>
                        {awaitChild}
                    </Await>
                </Suspense>
            </div>
        </div>
        </>
    )
}