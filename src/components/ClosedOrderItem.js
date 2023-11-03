import "./ClosedOrderItem.css"
export default function ClosedOrderItem({item}){
    return(
        <div className="container--closed-order-item">
            <h5 className="item-title--closed-order-item"></h5>
            <img className={`img-closed-order-item`} src={item.image} alt='cart item'/>
        </div>
    )
}