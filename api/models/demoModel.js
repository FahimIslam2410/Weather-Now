const mongoose = require("mongoose");

const DemoSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const Demo = mongoose.model("Demo", DemoSchema);

module.exports = Demo;
