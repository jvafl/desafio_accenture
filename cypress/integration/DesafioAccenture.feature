Feature: Desafio Accenture

    Scenario: Preencher a aba 'Enter Vehicle Data' com dados válidos
        Given acesso o site SampleApp
        And informo os campos da aba Enter Vehicle Data
        |make   |kW  |Data       |Number_of_Seats |Fuel_Type |List_Price |License_Plate_Number|Annual_Mileage |Cylinder_Capacity |Right_Hand_Drive |Payload |Total_Weight |Model |Number_Of_Seats_Motorcycle |
        |Audi   |100 |08/19/2024 |3               |Gas       |12000      |123                 |50000          |1000              |Yes              |1000    |1500         |Moped |3                          |
        And Avanço para a aba Enter Insurant Data 
        And informo os campos da aba Enter Insurant Data
        |first_name |last_name |data_of_birth |gender |street_address |country |zip_code |city        |occupation |hobbles      |website    |picture |
        |Juliana    |Silva     |01/01/1998    |Female |Rua dos sonhos |Brazil  |26011003 |Nova Iguaçu |Employee   |Cliff Diving |google.com |img.jpg |
        And Avanço para a aba Enter Product Data
        And informo os campos da aba Enter Product Data
        |start_date |insurance_sum |merit_rating |damage_insurance |optional_products |courtesy_car |
        |01/01/2025 |3.000.000,00  |Super Bonus  |No Coverage      |Euro Protection   |Yes          |
        And Avanço para a aba Select Price Option
        And Seleciono a opção Silver
        And Avanço para a aba Send Quote
        And informo os campos da aba Send Quote
        |email                 |phone         |username |password |confirm_password |comments |
        |juliana@gmailtest.com |5581987654321 |julianas |123aA@   |123aA@           |None     |
        When clico no botão Send
        Then devo visualizar mensagem de sucesso
