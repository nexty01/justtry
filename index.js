const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Public folder ko static serve karo
app.use(express.static(path.join(__dirname, "public")));

// Root pe friendship.html serve karo
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "friendship.html"));
});

// Server start
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
