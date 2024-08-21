/* global Given, Then, When */
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import InsurantDataPage from '../pageobjects/InsurantDataPage'
const insurantDataPage = new InsurantDataPage

And("informo os campos da aba Enter Insurant Data", (dataTable) => {
    dataTable.hashes().forEach(row => {
        insurantDataPage.informarFirstName(row.first_name);
        insurantDataPage.informarLastName(row.last_name);
        insurantDataPage.informarDataOfBirth(row.data_of_birth);
        insurantDataPage.informarGender(row.gender);
        insurantDataPage.informarStreetAddress(row.street_address);
        insurantDataPage.informarCountry(row.country);
        insurantDataPage.informarZipCode(row.zip_code);
        insurantDataPage.informarCity(row.city);
        insurantDataPage.informarOccupation(row.occupation);
        insurantDataPage.informarHobbles(row.hobbles);
        insurantDataPage.informarWebsite(row.website);
      });
})

And("Avanço para a aba Enter Product Data", () => {
    insurantDataPage.avancarAba();
})


