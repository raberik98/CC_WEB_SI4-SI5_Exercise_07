import express from "express"
import mongoose from "mongoose"
import path from "path"
import dotenv from "dotenv"
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
dotenv.config();
const { MONGO_URL, PORT } = process.env;


app.use(express.json())

app.get("/api/v1/getData", (req,res) => {
    res.send("Hello WOrld!")
})


//You may use this for th eoptional task
// app.get("/", (req, res, next) => {
//     res.sendFile(path.join(`${__dirname}/dist/index.html`));
// });
// app.use("/public", express.static(`${__dirname}/dist/assets`));

mongoose.connect(MONGO_URL).then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => {
        console.log("Server is running at http://localhost:3000");
    })
}).catch((err) => {
    console.log(err);
})
