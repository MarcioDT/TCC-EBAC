/// <reference types = "cypress"/>

import produtosPage from "../support/produtos.page";

describe('Funcionalidade: Produtos', () => {
    
      beforeEach(() => {
            produtosPage.visitarUrl()
        });

    it('Deve adicionar um produto no carrinho ', () => {
        cy.fixture('produtos').then(dados => {

            for (let index = 0; index < dados.length; index++) {

                produtosPage.buscarProduto(dados[index].nomeProduto)
                produtosPage.addProdutoCarriho(dados[index].tamanho,dados[index].cor,dados[index].quantidade)

                cy.get('.woocommerce-message').should('contain',dados[index].nomeProduto)   
                
            }
        })
    });
});