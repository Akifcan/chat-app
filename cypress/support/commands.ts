/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
Cypress.Commands.add("openChatWindow", () => {
  const button = cy.get("[data-testid='fab-button']");
  button.should("be.visible");
  button.click();
  cy.get("[data-testid='conversation']").should("be.visible");
});

Cypress.Commands.add("getByTestId", (selector, ...args) => {
  return cy.get(`[data-testid=${selector}]`, ...args);
});

Cypress.Commands.add("typeInput", (value: string) => {
  const input = cy.get(`[data-testid="chat-input"]`);
  const form = cy.get(`[data-testid="submit-form"]`);
  input.should("be.visible");
  form.should("be.visible");
  input.type(value);
  form.submit();
});

//
declare namespace Cypress {
  interface Chainable {
    openChatWindow(): Chainable;
    typeInput(value: string): Chainable;
    getByTestId(selector: string): Chainable;
  }
}
