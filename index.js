import dotenv from "dotenv";
import cors from "cors"
import express from "express"
import dns from "dns"
import { connectDB } from "./Backend/modules/db.js";
import authRoutes from "./Backend/routes/auth.route.js"
import userRoutes from "./Backend/routes/user.route.js"




dns.setServers(["1.1.1.1","8.8.8.8"])
dotenv.config()
const app=express()
const PORT=process.env.PORT || 5000


//middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes

app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)


app.get("/",(req,res)=>{
    res.send("Welcome to the HRMS API")
})

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/`);
  connectDB()
});