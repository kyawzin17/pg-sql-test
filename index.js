const express= require("express");
const app= express();
const PORT= process.env.PORT || 5000;

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
    res.json({name: "Kyaw Zin Win", email: "kyawzinwin23k@gmail.com", age: "22"})
})

app.listen(PORT, () => {
    console.log("This sever is run http://localhost:5000");
});