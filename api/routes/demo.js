const express = require("express");
const router = express.Router();
const tokenChecker = require("../middleware/TokenChecker");
const DemoController = require("../controllers/demo");

router.post("/", DemoController.Create);
router.get("/", DemoController.Render);
// router.get("/",tokenChecker, DemoController.Render); // Check the token

module.exports = router;
