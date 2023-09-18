import React from 'react';
import { mount } from '@cypress/react'; // Import Cypress's mount
import WeatherMainDetails from './WeatherMainDetails';

describe('WeatherMainDetails', () => {
  it('displays temperature, name, and feels like', () => {
    // Create a mock props object with sample data
    const props = {
      temp: 22.5, // Example temperature
      name: 'London', // Example city name
      feels_like: 20.3, // Example feels like temperature
    };

    // Mount the WeatherMainDetails component with the mock props
    mount(<WeatherMainDetails {...props} />);

    // Assert that the temperature, name, and feels like elements are displayed
    cy.get('.temp').should('contain', '22°C'); // Adjust the selector as needed
    cy.get('.name').should('contain', 'London'); // Adjust the selector as needed
    cy.get('.feelsLike').should('contain', '20°C'); // Adjust the selector as needed
  });
});
