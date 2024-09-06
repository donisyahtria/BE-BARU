import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import untuktest from "./routes/test"

const port = process.env.PORT || 3000
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.use("/", untuktest)

app.get("/*", (req,res)=>{
    res.status(200).json({message:"Selamat datang di Backend Doni"})
})

app.listen(port,()=>{
    console.log(`Server berjalan di port ${port}`);
    
})