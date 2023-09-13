import DemoRender from "./demoRender"
const navigate = () => {}

describe("Demo Render", () => {
  it("Calls the (get) /demo endpoint ", () => {
    window.localStorage.setItem("token", "fakeToken")
    
    cy.intercept('GET', '/demo', (req) => {
        req.reply({
          statusCode: 200,
            body: {
                message: "Hello World"
            }
        })
      }
    ).as("demoRender")

    cy.mount(<DemoRender navigate={navigate}/>)
    
    cy.wait("@demoRender").then(() =>{
      cy.get('[data-cy="message"]')
      .should('contain.text', "Hello World")
    })
  })
})