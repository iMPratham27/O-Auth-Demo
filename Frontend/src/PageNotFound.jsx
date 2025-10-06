
import { Navigate, useNavigate } from "react-router-dom"

export const PageNotFound = () => {

    const navigate = useNavigate();
    return (
        <div>
            <h3>404 Page Not Found!!</h3>
            <button onClick={() => navigate("/login")} >Login</button>
        </div>
    )
}
