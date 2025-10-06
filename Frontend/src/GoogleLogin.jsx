
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "./api.js";
import { useNavigate } from "react-router-dom";

export const GoogleLogin = () => {

    const navigate = useNavigate();

    // Step 2 : google sends authorization code 
    const responseGoogle = async(authResult) => {
        try{
            if(authResult['code']){
                const result = await googleAuth(authResult['code']);
                localStorage.setItem("user", JSON.stringify(result.data.user));
                navigate("/dashboard");
            }
        }catch(err){
            console.error("Error while requesting google code: ", err);
        }
    }

    // Step 1 : this is the start of OAuth : initialize
    const googleLogin = useGoogleLogin({
        onSuccess: responseGoogle,
        onError: responseGoogle,
        flow: 'auth-code'
    })

    return (
        <div>
            <button
                onClick={googleLogin}
            >
                Login with Google
            </button>
        </div>
    );
}