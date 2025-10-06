
import axios from "axios";
import { oauth2client } from "../utils/googleConfig.js"
import { UserModel } from "../model/userModel.js";
import jwt from "jsonwebtoken";

export const googleLogin = async(req, res) => {

    const { code } = req.query;

    try{ 
        // Step 4 : Backend exchanges Authorization Code for Tokens(at this point, we have access token)
        const googleRes = await oauth2client.getToken(code);
        oauth2client.setCredentials(googleRes.tokens);

        // Step 5 : fetches user profile from Google
        const userRes = await axios.get(
          "https://openidconnect.googleapis.com/v1/userinfo",
          {
            headers: {
              Authorization: `Bearer ${googleRes.tokens.access_token}`,
            },
          }
        );

        const { email, name, picture } = userRes.data;
        
        let user = await UserModel.findOne({email});
        if(!user){
            user = await UserModel.create({
                name,
                email,
                image: picture
            })
        }

        const token = jwt.sign(
            {_id: user._id, email},
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_TIMEOUT}
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 12*60*60*1000
        });

        return res.status(200).json({
            message:'Success',
            token,
            user
        });

    }catch(err){
        console.error("Google Login Error:", err.response?.data || err.message || err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}


export const userInfo = async(req, res) => {
    const id = req.user._id;
    const user = await UserModel.findById(id).select("name email image");
    return res.status(200).json({user});
}


export const logoutUser = async(req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
    })

    return res.status(200).json({
        message: "Logged out successfully"
    });
}

