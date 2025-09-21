const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Health endpoint
app.get("/health", (req, res) => {
  res.json({ status: "UP", timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Node API running on port ${PORT}`);
});
