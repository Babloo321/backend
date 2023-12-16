import express from 'express';
import cookiesParser from 'cookies-parser';
//working of cookies-->server se users ke cookies access karne k liye or users ke cookies set karne k liye
import cors from 'cors';
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true,
}))
// use --> generally used for middleware
app.use(express.json({limit: "20kb"}))      // this is saying express for json file and given limit
app.use(express.urlencoded({                // this is says to express url when getting space and something other to encoded else
    extended: true,
    limit: "16kb"
}))
app.use(express.static("public"))           // something to store in local for public use like (image, video)

app.use(cookiesParser())



export { app }