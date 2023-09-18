// Create a new Cypress test file (e.g., weatherApp.spec.js)

// Visit the WeatherApp page and perform various tests
describe('WeatherApp', () => {
    beforeEach(() => {
      // Visit the WeatherApp page before each test
      cy.visit('/');
    });
  
    it('displays the WeatherApp title', () => {
      cy.get('.weatherTitle').should('contain', 'Weather Now');
    });
  
    it('searches for a city and displays weather information', () => {
      // Type a city name in the search input and press Enter
      cy.get('.search-container input')
        .type('London')
        .type('{enter}');
  
      // Wait for weather information to load (adjust the wait time as needed)
      cy.wait(2000);
  
      // Verify that weather information is displayed
      cy.get('.weatherIcon').should('be.visible');
      cy.get('.temp').should('be.visible');
      cy.get('.name').should('be.visible');
      cy.get('.feelsLikeContainer').should('be.visible');
      cy.get('.WeatherSecondayDetailsContainer').should('be.visible');
    });
  
 
  });
  