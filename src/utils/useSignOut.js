import { UserDataContext } from "../contexts/UserDataContext"
import { useContext } from "react"
import { auth } from "../config/firbase"
import { signOut } from "firebase/auth"

export function useSignOut(){
    const { setUserData} = useContext(UserDataContext)
      function  logOut(){
        signOut(auth)
        setUserData()
    }
    return logOut
}