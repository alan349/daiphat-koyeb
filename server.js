const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

// phục vụ file tĩnh nếu bạn có thêm CSS, JS...
app.use(express.static(__dirname));

// trả về index.html đúng MIME type
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
