const express = require("express");
const cors = require("cors");
const supabase = require("./supabase");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// GET posts
app.get("/posts", async (req, res) => {
  const { data, error } = await supabase
    .from("posts")
    .select("*");

  if (error) return res.status(500).json(error);

  res.json(data);
});


// ADD post
app.post("/posts", async (req, res) => {
  const { title, type, content } = req.body;

  const { data, error } = await supabase
    .from("posts")
    .insert([{ title, type, content }]);

  if (error) return res.status(500).json(error);

  res.status(201).json(data);
});


app.listen(PORT, () => {
  console.log("Server running on " + `http://localhost:${PORT}`);
});
