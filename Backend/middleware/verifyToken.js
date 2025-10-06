import jwt from 'jsonwebtoken';

export const verifyToken = (req,res,next) => {

    const token = req.cookie.token;
    if(!token){
        return res.status(401).json({
            message:"UnAuthorized"
        });
    }

    try{
        const decoded = jwt.sign(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err){
        return res.status(403).json({
            message: "Invalid Token"
        });
    }
}