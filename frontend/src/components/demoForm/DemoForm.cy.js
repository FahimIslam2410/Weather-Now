import DemoForm from './DemoForm'
const navigate = () => {}

describe("using demoForm", () => {
  it("calls the (post) /demo endpoint", () => {
    cy.mount(<DemoForm navigate={navigate}/>)

    cy.intercept('POST', '/demo', { token: "fakeToken" }).as("demoRequest")

    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();
    cy.wait('@demoRequest').then( interception => {
      expect(interception.response.body.token).to.eq("fakeToken")
    })
  })

  it("shows an error message when no input is provided", () => {
    cy.mount(<DemoForm navigate={() => {}} />);

    cy.get("#submit").click();

    // Check if the error message is displayed
    cy.get('[data-cy="error"]').should('contain.text', 'Please enter a valid email or password');
  });

})