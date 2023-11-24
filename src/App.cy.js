import React from 'react'
import App from './App'

describe('<App />', () => {

  it('renders', () => {
    cy.mount(<App/>);
    cy.intercept('POST', 'http://localhost:3001/saveContactDetails', (req) => {
      req.reply({
        statusCode: 200,
        body: {
          success: true,
          message: 'Mock API response for testing',
        },
        delay: 1000, 
      });
    });
    cy.wait(2000); // Wait for 2 seconds
    cy.get('#comment').should('be.visible');
    cy.get('#comment').type("Should you test react components using cypress");
    cy.get('#email').should('be.visible');
    cy.get('#email').type("thamodi.wickramasinghe@gmail.com");
    cy.get('#submitBtn').click();
  })
})