/* global Given, Then, When */
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PriceOptionsPage from '../pageobjects/PriceOptionsPage'
const priceOptionsPage = new PriceOptionsPage

And("Seleciono a opção Silver", () => {
    priceOptionsPage.selecionarOpcaoSilver()
})

And("Avanço para a aba Send Quote", () => {
    priceOptionsPage.avancarAba();
})


