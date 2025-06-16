const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Example POST route (e.g., for a contact form)
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact form submitted:", { name, email, message });
  res.send("Thanks for contacting SmartBuy!");
});

// Start server
app.listen(PORT, () => {
  console.log(`SmartBuy server running at http://localhost:${PORT}`);
});