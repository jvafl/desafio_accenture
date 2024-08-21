/// <reference types="Cypress" />

class SendQuotePage {

    informarEmail(email) {
        cy.get('#email').should('be.enabled').type(email)
    }

    informarPhone(phone) {
        cy.get('#phone').should('be.enabled').type(phone)
    }

    informarUserName(userName) {
        cy.get('#username').should('be.enabled').type(userName)
    }

    informarPassword(password) {
        cy.get('#password').should('be.enabled').type(password)
    }

    informarConfirmPassword(confirmPassword) {
        cy.get('#confirmpassword').should('be.enabled').type(confirmPassword)
    }

    informarComments(comments) {
        cy.get('#Comments').should('be.enabled').type(comments)
    }

    avancarAba() {
        cy.get('#sendemail').should('be.enabled').click()
    }

    validarMensagemSucesso() {
        cy.get('h2').should('have.text', 'Sending e-mail success!')
    }
    
}

export default SendQuotePage;