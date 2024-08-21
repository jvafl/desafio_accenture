/* global Given, Then, When */
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import VehicleDataPage from '../pageobjects/VehicleDataPage'
const vehicleDataPage = new VehicleDataPage

And("informo os campos da aba Enter Vehicle Data", (dataTable) => {
    dataTable.hashes().forEach(row => {
        vehicleDataPage.informarMake(row.make);
        vehicleDataPage.informarKw(row.kW);
        vehicleDataPage.informarData(row.Data);
        vehicleDataPage.informarNumberOfSeats(row.Number_of_Seats);
        vehicleDataPage.informarFuelType(row.Fuel_Type);
        vehicleDataPage.informarListPrince(row.List_Price);
        vehicleDataPage.informarLicense(row.License_Plate_Number);
        vehicleDataPage.informarAnnualMileage(row.Annual_Mileage);
        vehicleDataPage.informarCylinderCapacity(row.Cylinder_Capacity);
        vehicleDataPage.informarRightHandDrive(row.Right_Hand_Drive);
        vehicleDataPage.informarPayload(row.Payload);
        vehicleDataPage.informarTotalWeight(row.Total_Weight);
        vehicleDataPage.informarModel(row.Model);
        vehicleDataPage.informarNumberOfSeatsMotorcycle(row.Number_Of_Seats_Motorcycle);
      });
})

And("Avanço para a aba Enter Insurant Data", () => {
    vehicleDataPage.avançarAba();
})

Given("acesso o site SampleApp", () => {
    vehicleDataPage.acessarSite();
})

Then("visualizo a aba 'Enter Vehicle Data'", () => {
})

