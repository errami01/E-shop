import "./ClosedOrderItem.css"
export default function ClosedOrderItem({item}){
    return(
        <div className="container--closed-order-item">
            <h5 className="item-title--closed-order-item">The order date</h5>
            <img className={`img-closed-order-item`} src={item.image} alt='cart item'/>
            <div className="quantity-table--closed-order-item">
                <span className="quantity-label--closed-order-item">quantity</span>
                <span className="quantity-value--closed-order-item">20</span>
            </div>
        </div >
    )
}