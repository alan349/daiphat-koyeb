const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

// phục vụ file tĩnh nếu có thêm CSS, JS
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); // quan trọng!
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
