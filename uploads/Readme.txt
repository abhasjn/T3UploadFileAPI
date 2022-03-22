mongoose is used to connect to our MongoDB database.

express allows you to define routes of your application based on 
HTTP methods and URLs.

BodyParser is used to handle HTTP post requests and extract the 
entire body portion of an incoming request stream and exposes it on req.body.

CookieParser is used for parsing the cookies.


Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.

DotEnv is a lightweight npm package that automatically loads environment variables from a . env file into the process
