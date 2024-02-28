import useAuthRedirect from "../context/useAuthRedirect"

export default function ShoppingCart() {
    useAuthRedirect();
    return (
        <>
            <h2>shopping</h2>
        </>
    )
        
   
}