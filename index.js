const express = require("express");
const path = require("path");
const app = express();

// Serve friendship.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "friendship.html"));
});

// Heroku assigns PORT automatically
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
