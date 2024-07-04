// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js"
import cors from "cors"
import cookieParser from "cookie-parser";

dotenv.config({
    path: "./env"
})


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))

app.use(express.static("public")) // used to store pdf or any other data temprorarily 
app.use(cookieParser())


connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running at port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MOngo db connection failed !!!", err);
})