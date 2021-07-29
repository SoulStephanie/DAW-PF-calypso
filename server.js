// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var receta = [
  {
    routenombre: "Duraznosconhelado",
    nombre: "Duraznos con Helado",
    categoria: "Postre ",
    Ingredientes: " 2 duraznos partidos a la mitad, 2 cucharadas de azúcar glas, 1 cucharadita de aceite, helado de yogurt de tu preferencia",
    prep: "Espolvorea con azúcar glas los duraznos, calienta una parrilla con aceite y pon los duraznos boca abajo por 3 min, retíralos y sirve el helado sobre los duraznos"
  }
];

// Routes
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

// Displays all recetas
app.get("/api/recetas", function(req, res) {
  return res.json(receta);
});

// Displays a single receta, or returns false
app.get("/api/recetas/:receta", function(req, res) {
  var chosen = req.params.receta;

  console.log(chosen);

  for (var i = 0; i < recetas.length; i++) {
    if (chosen === recetas[i].routenombre) {
      return res.json(recetas[i]);
    }
  }

  return res.json(false);
});


app.post("/api/recetas", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReceta = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newReceta.routeName = newReceta.nombre.replace(/\s+/g, "").toLowerCase();

  console.log(newReceta);

  recetas.push(newReceta);

  res.json(newReceta);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
