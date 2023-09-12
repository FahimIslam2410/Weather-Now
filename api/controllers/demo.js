const Demo = require("../models/demoModel");
const TokenGenerator = require("../lib/token_generator");

const DemoController = {
  Create: (req, res) => {
    const demo = new Demo(req.body);
    demo.save((err) => {
      if (err) {
        res.status(400).json({ message: "Bad request" });
      } else {
        const token = TokenGenerator.jsonwebtoken(demo.id);
        res.status(201).json({ token: token, message: "OK" });
      }
    });
  },
  Render: (req, res) => { 
    res.status(201).json({ message: "Hello World" });
  }

};

module.exports = DemoController;

