import { mock } from "node:test";

require("chai").should();

app.use(express.json());
app.use(router);
const mockUser = require("./userDb.json");

describe("GET /user", () => {
  it("should get all trips from db", async () => {
    const res = await request.get("/user");
    res.status.should.equal(200);
    res.body.should.eql(mockUser);
    res.body.length.should.equal(1);
  });
});
