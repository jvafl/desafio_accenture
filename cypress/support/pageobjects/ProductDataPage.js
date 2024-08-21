/// <reference types="Cypress" />

class ProductDataPage {

    informarStartDate(startDate) {
        cy.get('#startdate').should('be.enabled').type(startDate)
    }

    informarInsuranceSum(insuranceSum) {
        cy.get('#insurancesum').should('be.enabled').select(insuranceSum)
    }

    informarMeritRaiting(meritRaiting) {
        cy.get('#meritrating').should('be.enabled').select(meritRaiting)
    }

    informarDamageInsurance(DamageInsurance) {
        cy.get('#damageinsurance').should('be.enabled').select(DamageInsurance)
    }

    informarOptionalProducts(optionalProducts) {
        cy.get('section[style="display: block;"] > .idealforms-field-checkbox').should('be.visible').contains(optionalProducts).click()
    }

    informarCourtesyCar(courtesyCar) {
        cy.get('#courtesycar').should('be.enabled').select(courtesyCar)
    }

    avancarAba() {
        cy.get('#nextselectpriceoption').should('be.enabled').click()
    }
}

export default ProductDataPage;