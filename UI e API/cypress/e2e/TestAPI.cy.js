/// <reference types = "cypress"/>

describe('Funcionalidade: Cupons', () => {

    let token = "Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy"    

    it('Cadastrar cupom', () => {        
      cy.request({
            method: 'POST',
            url: 'rest-api/docs/wp-json/wc/v3/coupons/',
            headers: {authorization: token},  
            body: {
                "code": "CupomEBAC20",
                "amount": "20",
                "discount_type": "fixed_product",
                "description": "Cupom TCC-EBAC"
            }                        
        }).should((response) => {
            expect(response.status).to.equal(200)            
        })      
    })

    it('Listar todos os cupons', () => {        
      cy.request({
            method: 'GET',
            url: 'rest-api/docs/wp-json/wc/v3/coupons/',
            headers: {authorization: token},                          
        }).should((response) => {
            expect(response.status).to.equal(200)          
        })      
    })

});