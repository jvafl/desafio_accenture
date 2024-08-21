/// <reference types="Cypress" />

const url = Cypress.config("baseUrl")

class VehicleDataPage {
    acessarSite() {
        cy.visit(url)
    }

    informarMake(make) {
        cy.get('#make').should('be.visible').select(make)
    }

    informarKw(kw) {
        cy.get('#engineperformance').should('be.enabled').type(kw)
    }

    informarData(data) {
        cy.get('#dateofmanufacture').should('be.enabled').type(data)
    }

    informarNumberOfSeats(numberOfSeats) {
        cy.get('#numberofseats').should('be.visible').select(numberOfSeats)
    }

    informarFuelType(fuelType) {
        cy.get('#fuel').should('be.visible').select(fuelType)
    }

    informarListPrince(listPrince) {
        cy.get('#listprice').should('be.enabled').type(listPrince)
    }

    informarLicense(license) {
        cy.get('#licenseplatenumber').should('be.enabled').type(license)
    }

    informarAnnualMileage(annualMileage) {
        cy.get('#annualmileage').should('be.enabled').type(annualMileage)
    }

    informarCylinderCapacity(cylinderCapacity) {
        cy.get('#cylindercapacity').should('be.enabled').type(cylinderCapacity)
    }

    informarRightHandDrive(rightHandDrive) {
        cy.get('[class=ideal-radiocheck-label]').should('be.visible').contains(rightHandDrive).click()
    }

    informarPayload(payload) {
        cy.get('#payload').should('be.enabled').type(payload)
    }

    informarTotalWeight(totalWeight) {
        cy.get('#totalweight').should('be.enabled').type(totalWeight)
    }

    informarModel(model) {
        cy.get('#model').should('be.visible').select(model)
    }

    informarNumberOfSeatsMotorcycle(numberOfSeatsMotorcycle) {
        cy.get('#numberofseatsmotorcycle').should('be.visible').select(numberOfSeatsMotorcycle)
    }

    avançarAba() {
        cy.get('#nextenterinsurantdata').should('be.enabled').click()
    }
    
}

export default VehicleDataPage;
