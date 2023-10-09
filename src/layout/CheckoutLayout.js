import './CheckoutLayout.css'
import { Outlet, useLoaderData, useOutletContext } from "react-router-dom"
import Cart from "../components/Cart"
import {requireAuth} from  '../utils/requireAuth'
import CheckoutPhase from '../components/CheckoutPhase'
import { getOnGoingCheckout } from '../utils/fetcher'

export async function loader({request}){
    requireAuth(request)
    return await getOnGoingCheckout()     
}
export default function CheckoutLayout(){
    const {cart} = useOutletContext()
    const onGoingCheckout = useLoaderData()
    const phases = ['personalInfos', 'shipping', 'payment']
    const style = {
        borderBottom: '4px solid'
    }
    }
    return(
        <div className="container--checkoutLayout">
            <div className='infos-section--checkoutLayout'>
                <ul className='phases--checkoutLayout'>
                    <CheckoutPhase
                    to={currentPhaseIndex >=0 && 'personalInfos'}
                    style={({isActive})=> {return isActive? style:{}}}
                    className={`${currentPhaseIndex > 0 && 'completed-phase--checkoutLayout'} phase-link--checkoutLayout`}>
                        Account <i className="fa-solid fa-circle-check"></i>
                    </CheckoutPhase>
                    {'->'}
                    <CheckoutPhase
                    to={currentPhaseIndex >=1? 'shipping':undefined} 
                    style={({isActive})=> {return isActive? style:{}}}
                    className={`${currentPhaseIndex > 1 && 'completed-phase--checkoutLayout'} phase-link--checkoutLayout`}
                    >
                        Shipping <i className="fa-solid fa-circle-check"></i>
                    </CheckoutPhase>
                    {'->'}
                    <CheckoutPhase
                    to={currentPhaseIndex >=2 && 'payment'}
                    style={({isActive})=> isActive? style:{}}
                    >
                        Payment <i className="fa-solid fa-circle-check"></i>
                    </CheckoutPhase>
                </ul>
            </div>     
            <Cart cart={cart}/>
        </div>
    )
}