const app = require("../../app");
const request = require("supertest");
require("../mongodb_helper");
const Demo = require('../../models/demoModel');

describe("POST /demo Create", () => {
  beforeEach( async () => {
    await Demo.deleteMany({});
  });

  describe("POST, correct email and password returns 201", () => {
    test("the response code is 201", async () => {
      let response = await request(app)
        .post("/demo")
        .send({email: "test@email.com", password: "1234"})
      expect(response.statusCode).toBe(201)
    })
    test("check if email was created", async () => {
      await request(app)
        .post("/demo")
        .send({email: "test@email.com", password: "1234"})
      let demos = await Demo.find()
      let newDemos = demos[demos.length - 1]
      expect(newDemos.email).toEqual("test@email.com")
    })
  })

  describe("POST, when input is missing", () => {
    test("password missing returns 400", async () => {
      let response = await request(app)
        .post("/demo")
        .send({email: "test@email.com"})
      expect(response.statusCode).toBe(400)
    });
    test("email missing returns 400", async () => {
        let response = await request(app)
          .post("/demo")
          .send({password: "1234"})
        expect(response.statusCode).toBe(400)
    });
  })    
    
})

describe("GET /demo Render", () => {
    test("returns 201", async () => {
      let response = await request(app)
        .get("/demo")
      expect(response.statusCode).toBe(201)
    });
    test("returns Hello World", async () => {
        let response = await request(app)
          .get("/demo")
        expect(response.body.message).toBe("Hello World")
      });
      

})