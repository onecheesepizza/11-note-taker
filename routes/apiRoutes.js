//dependencies
var db = require("../db/db.json");

//routing
module.exports = function(app) {
  // API GET request route
  app.get("/api/notes", function(req, res) {
    console.log(db);
    res.json(db);
  });

  //API POST request route
  app.post("/api/notes", function(req, res) {
    res.json();
  });

  //API DELETE request route
  app.delete("/api/notes/:id", function(req, res) {
    res.json();
  });
};
