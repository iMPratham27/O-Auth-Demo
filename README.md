**.env in Backend folder**
PORT=8080
GOOGLE_CLIENT_ID=xxx
GOOGLE_CLIENT_SECRET=xxx
DB_URL=xxx(URL from mongodb atla)
JWT_SECRET=xxx
JWT_TIMEOUT=12h
NODE_ENV=development

**.env in Frontend folder**
VITE_GOOGLE_CLIENT_ID=xxx

Here, VITE_GOOGLE_CLIENT_ID = GOOGLE_CLIENT_ID
You get the google client id and google client secret inside .json file that you download from google cloud console during oauth setup.
