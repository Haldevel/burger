
//the controller file to handle routing logic - our middleware between the view and the database model
var express = require("express"); //Import express

var router = express.Router();  //we create a smaller container for our routes

// Import the model (burger.js) to use its database functions
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required - the main route to select and display all burgers
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//the route allowing to insert a new burger using post
router.post("/api/burgers", function (req, res) {
  burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, false], function (result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

//the route allowing to update a burger record in the db for the corresponding id passes as a parameter
router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use.
module.exports = router;