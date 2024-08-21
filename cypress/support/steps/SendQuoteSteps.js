/* global Given, Then, When */
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import SendQuotePage from '../pageobjects/SendQuotePage'
const sendQuotePage = new SendQuotePage

And("informo os campos da aba Send Quote", (dataTable) => {
    dataTable.hashes().forEach(row => {
        sendQuotePage.informarEmail(row.email);
        sendQuotePage.informarPhone(row.phone);
        sendQuotePage.informarUserName(row.username);
        sendQuotePage.informarPassword(row.password);
        sendQuotePage.informarConfirmPassword(row.confirm_password);
        sendQuotePage.informarComments(row.comments);
      });
})

When("clico no botão Send", () => {
    sendQuotePage.avancarAba();
})

Then("devo visualizar mensagem de sucesso", () => {
    sendQuotePage.validarMensagemSucesso();
})
