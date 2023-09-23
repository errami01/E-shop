import { auth } from "../config/firbase";
export default async function sendFormData(path, request){
    const user =auth.currentUser
    const idToken = await user.getIdToken()
    const formData = await request.formData()
    const toSend = {}
    for (const key of formData.keys()) {
        toSend[key] = formData.get(key)
      }
    await fetch(`https://e-commerce-8a744-default-rtdb.europe-west1.firebasedatabase.app/${path}/${user.uid}.json?auth=${idToken}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(toSend)
    })
}