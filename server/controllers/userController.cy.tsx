describe('user controller test', () => {

    it('Posts user', () => {

        cy.request({
            method: 'POST',
            url: 'http://localhost:3333//user',
            headers: {'Content-type': 'application/json'},
            body:{
                'id': 12345,
                'name':'Freddie',
                'surname':'Mercury',
                'email':'fredward1@mail.com',
                'password':'queen123'
            }
        }).then((res)=>{
            expect(res.body).to.have.property('json');
            expect(res.body.json).to.deep.equal({
                'id': 12345,
                'name':'Freddie',
                'surname':'Mercury',
                'email':'fredward1@mail.com',
                'password':'queen123'
            })
        })
    })
})