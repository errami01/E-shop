import './ProductCard.css'
import { useRate } from '../utils/useRate';
export default function Product(product){
    const {image, title, price, rating}= product
    const stars= useRate(rating.rate)
    function setStars(rate){
        const starIcons = []
        let counter=1;
        while(counter <= rate){
            starIcons.push(<i className="fa-solid fa-star"></i>)
            counter++
        }
        const remaining = counter-rate
        if( remaining < 1){
            if(remaining > 0.75)  starIcons.push(<i className="fa-regular fa-star"></i>)
            else if(remaining > 0.25)  starIcons.push(<i className="fa-solid fa-star-half"></i>)
            else starIcons.push(<i className="fa-solid fa-star"></i>)
        }
        while(starIcons.length <5){
            starIcons.push(<i className="fa-regular fa-star"></i>)
        }
        return starIcons
    }
    

    // console.log(rating)
    return(
        <div className="product-container">
            <section className='product-image-section'>
                <img className="product-image" src={image} />
            </section>
            <section className='name-and-rating'>
                <div className='price'>{Number.isInteger(price)? price+'.00':price}$</div>
                <div className="product-name">{title}</div>    
                <div className="product-rating">
                    <span className='count'>({rating.count})</span>
                    {stars}
                    <span className='rate'>{rating.rate}</span>
                </div>
            </section>

        </div>
    )
} 