# UI Automation with Playwright and TypeScript

This repository contains UI automation tests for a web application using [Playwright](https://playwright.dev/) and [TypeScript](https://www.typescriptlang.org/). It follows the Page Object Model (POM) design pattern and includes features like Cucumber for BDD and test reporting.

## Tech Stack

- [Playwright](https://playwright.dev/)
- TypeScript
- Node.js
- Cucumber
  
---

## Getting Started

### 1. Clone the repository

```bash
git clone [https://github.com/your-username/your-repo-name.git](https://github.com/kushalbhardwaj360/playwright-bdd.git)
cd playwright-bdd

### 2. Install the dependencies

Make sure you have Node.js (v16 or higher) installed. If not:
npm install

### 3. Install Playwright browsers

npx playwright install

### 4. Running the tests
feature files are located in tests/ directory.
Make a note of tag associated with the test
Open cucumber.js file
enter the tag in `tags`
Run the test: npx cucumber-js
