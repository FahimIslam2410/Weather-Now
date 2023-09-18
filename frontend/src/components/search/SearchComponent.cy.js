import SearchComponent from './SearchComponent'

describe('SearchComponent', () => {
  it('searches for a city', () => {
    const onCityChangeSpy = cy.stub().as('onCityChange');

    cy.mount(<SearchComponent onCityChange={onCityChangeSpy} />);

    // Type "London" into the input field
    cy.get('input').type('London');

    // Press Enter to trigger the search
    cy.get('input').type('{enter}');

    // Assert that the onCityChange function was called with "London"
    cy.get('@onCityChange').should('have.been.calledWith', 'London');
  });
  
});
