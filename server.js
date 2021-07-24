// Dependencias
var express = require("express");
var path = require("path");

// Habilitar Express
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Rutas
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/all", function(req, res) {
  res.sendFile(path.join(__dirname, "all.html"));
});

app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "search.html"));
  });



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});