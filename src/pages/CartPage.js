import CartItem from "../components/CartItem"
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import './CartPage.css'
import {nanoid} from 'nanoid'
export default function CartPage(){
    const cart = useContext(CartContext)
    const {cartItems, cartItemsNumber} = cart
    const cartItemsElements = cartItems.map((item)=>{
        return <CartItem  key={nanoid()} item={item} cart={cart}/>
    })
    const totalAmount = cartItems.reduce((acc, curr)=>  acc+(curr.price*curr.orderedQuantity),0)
    return (
        <div className="cart-container">
            <div className="items-cart">
                <h2 className="title-cart">My Cart</h2>
                {cartItemsElements}
                {
                    cartItemsNumber ? 
                    <div className="total-cart">
                        <span className="total-label-cart">Total :</span>
                        <span className="amount-cart">{totalAmount.toFixed(2)}$</span>
                        <button className="place-order-cart">Place order</button>
                    </div>
                    :
                    <h1 className="empty--cart">Your cart is empty</h1>
                }
                
            </div>
            
           
        </div>
    )
}