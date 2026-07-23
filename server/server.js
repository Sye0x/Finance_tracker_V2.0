import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


dotenv.config()
const app =express()

app.use(
    cors({
    origin:"http://localhost:5173/",
    Credential:true
})
)

app.use(express.json())
app.use(cookieParser())

app.get("/",()=>{
    res.json({
        message:"Server running successfully"
    })
})

const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})