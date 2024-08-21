/* global Given, Then, When */
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ProductDataPage from '../pageobjects/ProductDataPage'
const productDataPage = new ProductDataPage

And("informo os campos da aba Enter Product Data", (dataTable) => {
    dataTable.hashes().forEach(row => {
        productDataPage.informarStartDate(row.start_date);
        productDataPage.informarInsuranceSum(row.insurance_sum);
        productDataPage.informarMeritRaiting(row.merit_rating);
        productDataPage.informarDamageInsurance(row.damage_insurance);
        productDataPage.informarOptionalProducts(row.optional_products);
        productDataPage.informarCourtesyCar(row.courtesy_car);
      });
})

And("Avanço para a aba Select Price Option", () => {
    productDataPage.avancarAba();
})


