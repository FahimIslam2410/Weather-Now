const express = require("express");
const router = express.Router();
const DemoController = require("../controllers/demo");

router.post("/", DemoController.Create);
router.get("/", DemoController.Render);

module.exports = router;
