/// <reference types="Cypress" />

describe('Interest Rate Input Field Scenarios', () => {
    beforeEach(() => {
        // Go to the Zillow Mortgage Calculator page before running each case
        cy.visit('https://www.zillow.com/mortgage-calculator/')
      
      })

    it('Test 1 - Valid input (integer)', () => {

        // Get the default value for "Your payment" and set it to a variable
        const your_payment_default = cy.get('[y="20"]')
        // Find the interest rate field, clear the prepopulated value and type a new valid one 
        cy.get('#rate')
            .clear()
            .type('50')
        // Click away from the input field
        cy.get('body').click(0,0);
        // Get the updated value for "Your payment" and set it to a new variable
        const your_payment_updated = cy.get('[y="20"]')
        // Validate that the value for "Your Payment" has changed
        expect(your_payment_default).not.equal(your_payment_updated)
    })

    it('Test 2 - Invalid input (letters)', () => {

         // Find the interest rate field, clear the prepopulated value and type letters instead of numbers 
         cy.get('#rate')
            .clear()
            .type('abc')
         // Click away from the input field
         cy.get('body').click(0,0);
         // Validate the error message appears and has the expected text value
         cy.get('p[id^=__c11n_]')
            .should('be.visible')
            .and("have.text", "'abc' is not a valid number")
    })
  })