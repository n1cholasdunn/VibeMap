describe('example', () => {
  it('Get trips', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3333//place/:lat/:lng/:name',
    }).then((res) => {
      expect(res.body).have.property('name');
    });
  });
});
