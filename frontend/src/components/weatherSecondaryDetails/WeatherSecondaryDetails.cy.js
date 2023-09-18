import WeatherSecondaryDetails from './WeatherSecondaryDetails';

describe('WeatherSecondayDetails', () => {
  it('displays wind and humidity details', () => {
    // Mount the WeatherSecondayDetails component with test data
    cy.mount(
      <WeatherSecondaryDetails wind="10" humidity="60" />
    );

    // Assert that the wind and humidity details are displayed correctly
    cy.get('.windContainer .windImage').should('be.visible');
    cy.get('.windContainer .wind').should('contain', '10MPH');
    
    cy.get('.humidityContainer .humidityImage').should('be.visible');
    cy.get('.humidityContainer .wind').should('contain', '60%');
  });
});
