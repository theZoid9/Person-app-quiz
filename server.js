const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, "src")));


app.use("/pages", express.static(path.join(__dirname, "src", "pages")));
app.use("/js", express.static(path.join(__dirname, "src", "js")));
app.use("/services", express.static(path.join(__dirname, "src", "services")));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "src", "pages", "whoops.html"));
});


app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
