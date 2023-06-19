describe("trip controller test", () => {
  it("Get trips", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3333//trips",
    }).then((res) => {
      expect(res.body).to.have.property("id");
    });
  });

  it("Posts trips", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3333//trips",
      headers: { "Content-type": "application/json" },
      body: {
        type: "oneway",
        coords: {
          end: {
            lat: 45.4215296,
            lng: -75.69719309999999,
          },
        },
      },
    }).then((res) => {
      expect(res.body).to.have.property("json");
      expect(res.body.json).to.deep.equal({
        type: "oneway",
        coords: {
          end: {
            lat: 45.4215296,
            lng: -75.69719309999999,
          },
        },
      });
    });
  });
});
