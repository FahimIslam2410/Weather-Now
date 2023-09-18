// Import the WeatherLogo component
import WeatherLogo from './WeatherLogo';

describe('WeatherLogo', () => {
    it('displays the correct weather icon for "01d"', () => {
        cy.mount(<WeatherLogo icon="01d" />);
      
        cy.get('.weatherIcon').should(
          'have.attr',
          'src',
          '/__cypress/src/static/media/clear-day.f1148f358aa1e13bee23b6cf1b54bac7.svg'
        );
      });
      
      it('displays the correct weather icon for "02n"', () => {
        cy.mount(<WeatherLogo icon="02n" />);
      
        cy.get('.weatherIcon').should(
          'have.attr',
          'src',
          '/__cypress/src/static/media/partly-cloudy-day.22af82f41162d6ba6559909abad9e54d.svg'
        );
      });
      
});
