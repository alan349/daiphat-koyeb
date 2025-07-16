const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

// ✅ Phục vụ file tĩnh nếu cần
app.use(express.static(__dirname));

// ✅ Sửa phần này
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); // ✅ Trả HTML đúng cách
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
