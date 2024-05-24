/// <reference types="Cypress" />

describe('Interest Rate Input Field Scenarios', () => {
    beforeEach(() => {
        // Go to the Zillow Mortgage Calculator page before running each case
        cy.visit('https://www.zillow.com/mortgage-calculator/')

    })

    it('Test 1 - Valid input (integer)', () => {

        // Get the default text value for "Your payment" 
        cy.get('text[y="20"]')
            .invoke('text')
            .then((your_payment_default) => {

                //Change the default interest rate value to 50
                cy.get('#rate')
                    .clear()
                    .type('50')
                // Click away from the input field and wait for 1 sec till page fully loads
                cy.get('body').click(0, 0)
                cy.wait(1000)

                //Get the text value for "Your payment" again and compare it to the previous value
                //The values should not match
                cy.get('text[y="20"]')
                    .invoke('text')
                    .should((your_payment_updated) => {
                        expect(your_payment_default).not.to.eq(your_payment_updated)
                    }
                    )

            })
    })

    it('Test 2 - Invalid input (letters)', () => {

        // Find the interest rate field, clear the prepopulated value and type letters instead of numbers 
        cy.get('#rate')
            .clear()
            .type('abc')
        // Click away from the input field and wait for 1 sec
        cy.get('body').click(0, 0)
        cy.wait(1000)
        // Validate the error message appears and has the expected text value
        cy.get('p[id^=__c11n_]')
            .should('be.visible')
            .and("have.text", "'abc' is not a valid number")
    })
})