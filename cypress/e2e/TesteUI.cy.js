/// <reference types = "cypress"/>

import commandsPage from "../support/commands";

describe('Funcionalidade: Produtos', () => {
    
      beforeEach(() => {
            commandsPage.visitarUrl('produtos')
        });

    it('Deve adicionar um produto no carrinho ', () => {
        cy.fixture('produtos').then(dados => {
            for (let index = 0; index < dados.length; index++) {

                commandsPage.buscarProduto(dados[index].nomeProduto)
                commandsPage.addProdutoCarriho(dados[index].tamanho,dados[index].cor,dados[index].quantidade)

                cy.get('.woocommerce-message').should('contain',dados[index].nomeProduto)                   
            }
        })
    });
});