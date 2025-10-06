
import { google } from "googleapis";
import dotenv from "dotenv";
dotenv.config();

// Creates a Google OAuth2 client for your backend.
export const oauth2client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    'postmessage'
);


// postmessage: is basically used for server-side token exchange between our server to google server