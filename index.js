const express = require("express");
const cors = require("cors");
const supabase = require("./supabase");

const multer= require("multer");
const cloudinary= require("./cloudinary");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//cloudinary 
const storage= multer.memoryStorage();
const upload= multer({storage});

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload_stream(
      { resource_type: "auto" },
      (error, result) => {
        if (error) return res.status(500).json(error);
        res.json({ url: result.secure_url });
      }
    );

    result.end(req.file.buffer);
  } catch (err) {
    res.status(500).json(err);
  }
})


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

app.delete("/posts/:id", async (req, res) => {
 const {id}= req.params;

 const { error } = await supabase
    .from("posts")
    .delete()
    .eq("id", id);

 if (error) return res.status(500).json(error);

 res.status(204).json({success: true});
})


app.listen(PORT, () => {
  console.log("Server running on " + `http://localhost:${PORT}`);
});
