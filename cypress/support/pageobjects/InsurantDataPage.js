/// <reference types="Cypress" />

class InsurantDataPage {

    informarFirstName(firstName) {
        cy.get('#firstname').should('be.enabled').type(firstName)
    }

    informarLastName(lastName) {
        cy.get('#lastname').should('be.enabled').type(lastName)
    }

    informarDataOfBirth(DataOfBirth) {
        cy.get('#birthdate').should('be.enabled').type(DataOfBirth)
    }

    informarGender(Gender) {
        cy.get('section[style="display: block;"] > :nth-child(4)').should('be.visible').contains(Gender).click()
    }

    informarStreetAddress(streetAddress) {
        cy.get('#streetaddress').should('be.enabled').type(streetAddress)
    }

    informarCountry(country) {
        cy.get('#country').should('be.enabled').select(country)
    }

    informarZipCode(zipCode) {
        cy.get('#zipcode').should('be.enabled').type(zipCode)
    }

    informarCity(city) {
        cy.get('#city').should('be.enabled').type(city)
    }

    informarOccupation(occupation) {
        cy.get('#occupation').should('be.enabled').select(occupation)
    }

    informarHobbles(hobbles) {
        cy.get('section[style="display: block;"] > .idealforms-field-checkbox').should('be.visible').contains(hobbles).click()
    }

    informarWebsite(website) {
        cy.get('#website').should('be.enabled').type(website)
    }

    informarPicture(picture) {
        cy.get('#picture').should('be.enabled').type(picture)
    }

    avancarAba() {
        cy.get('#nextenterproductdata').should('be.enabled').click()
    }
}

export default InsurantDataPage;