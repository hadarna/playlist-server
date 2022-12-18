const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./Routes")

app.use(cors());
app.use(express.json())

app.use("/api", router)

app.listen(4000, () => {
    console.log("Server listening on port 4000");
})