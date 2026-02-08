const express= require("express");
const app= express();
const PORT= process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.json({message: "This is sever!"})
})

app.listen(PORT, () => {
    console.log("This sever is run http://localhost:5000");
});