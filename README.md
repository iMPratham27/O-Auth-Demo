**.env in Backend folder:**<br/>
PORT=8080<br/>
GOOGLE_CLIENT_ID=xxx<br/>
GOOGLE_CLIENT_SECRET=xxx<br/>
DB_URL=xxx(URL from mongodb atla)<br/>
JWT_SECRET=xxx<br/>
JWT_TIMEOUT=12h<br/>
NODE_ENV=development<br/>
<br/>
**.env in Frontend folder:**<br/>
VITE_GOOGLE_CLIENT_ID=xxx<br/>
<br/>
Here, VITE_GOOGLE_CLIENT_ID = GOOGLE_CLIENT_ID<br/>
You get the google client id and google client secret inside .json file that you download from google cloud console during oauth setup.
