# UI Automation with Playwright and TypeScript

This repository contains UI automation tests for a web application using [Playwright](https://playwright.dev/) and [TypeScript](https://www.typescriptlang.org/). It follows the Page Object Model (POM) design pattern and includes features like Cucumber for BDD and test reporting.

## Tech

- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Cucumber.js](https://github.com/cucumber/cucumber-js)
- Node.js
- Page Object Model (POM)
  
---

## Getting Started

### 1. Clone the repository

git clone https://github.com/kushalbhardwaj360/playwright-bdd.git

cd playwright-bdd

### 2. Install the dependencies

Ensure you have Node.js (version 16 or higher) installed. If not:

`npm install`

### 3. Install Playwright browsers

`npx playwright install`

### 4. Running the tests

- Feature files are located in the `tests/` directory
- Each scenario is tagged using `@<tag>` (e.g. @login).
- To run specific tests:
     - Open `cucumber.js` file.
     - Set the tags value to the tag you want to run (e.g. @login).
     - Then run the command: `npx cucumber-js`
