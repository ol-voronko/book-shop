import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./useUser";

const useAuthRedirect = () => {
    const { username } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!username) {
            navigate("/signin")
        }
    } ,[username])

}
export default useAuthRedirect;