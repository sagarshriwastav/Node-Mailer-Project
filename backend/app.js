require("dotenv").config();
const express = require("express")
const router = require("./routes/router")
const app = express();
const cors = require("cors")

const port = 8006;


app.use(express.json());
app.use(router)
app.use(cors())//cross origin resource sharing


app.get("/", (req, res) => {
    res.send("Server running...");
})
app.listen(port, () => {
    console.log(`Server started running... on port no : ${port} `);
})