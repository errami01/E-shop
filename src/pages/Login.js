import './Login.css'
import {InputComponent} from '../components/InputComponent'
import { Form, redirect, Link } from 'react-router-dom'
import { useActionData } from 'react-router-dom'
import { auth } from "../config/firbase";
import { signInWithEmailAndPassword } from 'firebase/auth'

export function loader(){
    if(JSON.parse(localStorage.getItem('user'))){
        throw redirect('/customer')
    }
    return null
}
export async function action({request}){
    const url = new URL (request.url)
    const formData = await request.formData()
    const username =  formData.get('username')
    const password = formData.get('password')
    const pathToGo = url.searchParams.get('redirectTo') || '/customer'
    try{
         const credentials = await signInWithEmailAndPassword(auth, username, password)
         localStorage.setItem('user', JSON.stringify({
            id: credentials.user.uid,
            email: credentials.user.email
         }))
         return redirect(pathToGo)
    }
    catch(e){
        return e.message
    } 
}
export default function Login(){
    const errorMessage = useActionData()
    return(
        <div className="login-container">
            
            <span className='big-user-icon--login'>
                <i className="fa-regular fa-user" ></i>
            </span>
            <h3 className='sign-in-urge--login'>Sign in to your account</h3>
            {errorMessage && <h5 className='error-message-login'>{errorMessage}</h5>}
            <Form method='post' className='form--login' replace>
                <InputComponent 
                    name='username'
                    label='Username' 
                    type='text'
                    icon = {<i className="fa-solid fa-user fa" ></i>}
                    required
                    />
                <InputComponent 
                    name='password'
                    label='Password' 
                    type='password'
                    icon={<i className="fa-solid fa-key fa"></i>}
                    required
                />  
                <button className='submit-btn--login'>Login</button>
            </Form>
            <p className='customer--login'>Don't have an account? 
            <Link to='/signup'> Sign-up</Link></p>
            <p className='customer--login'>Username: johnd, Password: m38rmF$</p>
        </div>
    )
}