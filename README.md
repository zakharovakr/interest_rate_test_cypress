# Interest rate input field automated test cases - Cypress

## Project Description

This project is part of an interview assignment designed to demonstrate test automation skills.

The assignment was to:
- Create a [test plan](https://docs.google.com/spreadsheets/d/1uuKeqUgh16yLjZ94JiYwaf3m596AqGC-yljasN1PQw8/edit?usp=sharing) for the Interest Rate input field on the [Zillow Mortgage Calculator](https://www.zillow.com/mortgage-calculator/) page;
- Automate two of the test cases using Cypress. 

## How to work with this project

### Prerequisites to run the tests: 
System requirements - refer to the [official Cypress Documentation](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)

### Setup 

1. Fork the repo to your `Github`
2. Clone the repo to your local machine and navigate to your folder

After forking this project in `Github`, run these commands:

```bash
## clone this repo locally
git clone <your project name>

## navigate to your folder
cd /your/project/path
```

3. Install Cypress - follow the [official documentation instructions ](https://docs.cypress.io/guides/getting-started/installing-cypress#Installing)

```bash
## run this command to ensure cypress is installed in the correct directory
npm init
## install Cypress
npm install cypress --save-dev
```

4. Open Cypress - follow the [official documentation](https://docs.cypress.io/guides/getting-started/installing-cypress#Installing)

Once installed completely, open a new terminal in your preferred code editor (e.g. VS Code) for your project, and run Cypress
   
```bash
## open Cypress from your project root using
npx cypress open
```
5. In Cypress IDE choose "E2E Testing"
6. Choose your browser -> Click on "Start Testing"
7. Click on `interest_rate_tests.cy.js` -> the tests will run (and hopefully pass)
    
