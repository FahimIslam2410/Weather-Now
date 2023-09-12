const mongoose = require("mongoose");

require("../mongodb_helper");
const Demo = require("../../models/demoModel");

describe("Demo model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.demos.drop(() => {
      done();
    });
  });

  it("has an email address", () => {
    const demo = new Demo({
      email: "someone@example.com",
      password: "password",
    });
    expect(demo.email).toEqual("someone@example.com");
  });

  it("has a password", () => {
    const demo = new Demo({
      email: "someone@example.com",
      password: "password",
    });
    expect(demo.password).toEqual("password");
  });

  it("can list all demos", (done) => {
    Demo.find((err, demos) => {
      expect(err).toBeNull();
      expect(demos).toEqual([]);
      done();
    });
  });

  it("can save a demo", (done) => {
    const demo = new Demo({
      email: "someone@example.com",
      password: "password",
    });

    demo.save((err) => {
      expect(err).toBeNull();

      Demo.find((err, demos) => {
        expect(err).toBeNull();

        expect(demos[0]).toMatchObject({
          email: "someone@example.com",
          password: "password",
        });
        done();
      });
    });
  });
});
