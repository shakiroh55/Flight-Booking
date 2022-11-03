const router = require("express").Router();

const controllers = require("../controllers/flightController");

router
.get("/", controllers.getFlights)
.get("/:id", controllers.getFlight)
.post("/", controllers.createFlight)
.put("/:id", controllers.updateFlight)
.delete("/:id", controllers.deleteFlight);

module.exports = router;