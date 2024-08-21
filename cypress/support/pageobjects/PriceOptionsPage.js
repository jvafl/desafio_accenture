/// <reference types="Cypress" />

class PriceOptionsPage {

    selecionarOpcaoSilver() {
        cy.get('#selectsilver').should('be.enabled').click({force: true})
    }

    avancarAba() {
        cy.get('#nextsendquote').should('be.enabled').click()
    }

}

export default PriceOptionsPage;