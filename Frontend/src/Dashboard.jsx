
import { logoutUser } from "./api.js";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    const navigate = useNavigate();

    const handleLogout = async() => {
        try{
            await logoutUser();
            localStorage.removeItem("user");
            navigate("/login");
        }catch(err){
            console.error("Logout failed", err);
        }
    }

    return (
        <div>
            <h1>Welcome {user.name}</h1>
            <p>Email: {user.email}</p>
            <img src={user.image} alt="profile" width="100px" />
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}