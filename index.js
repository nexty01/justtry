const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (images, css, js, etc.)
app.use(express.static(path.join(__dirname)));

// Main route → serve friendship.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "friendship.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
