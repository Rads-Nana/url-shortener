import express from "express";
import path from "path";

const app = express();
const PORT = 4000;

const urls = new Map<string, string>();

const publicPath = path.join(__dirname, "../public");

app.use(express.static(publicPath));
app.use(express.json());

app.post("/", (req, res) => {
  const url = req.body.url;
  const code = Math.random().toString(36).substring(2, 8);
  urls.set(code, url);
  res.json({ short_url: "/" + code, url: url });
});

app.get("/:code", (req, res) => {
    const code = req.params.code
    const url = urls.get(code)

    if (!url) {
        res.status(404).json({"error": "URL not found"})
    } else {
        res.status(301).location(url).json({ url })
    }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
