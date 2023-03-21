/// <reference types = "Cypress" />

import {loginPage} from "../page_object/login";
describe("login text", () => {
    beforeEach("visit login page", () => {
        cy.visit("/login");
        loginPage.headingText
        .should("be.visible")
        .and("have.text", "Log in with your existing account")
        .and("exist")
        .and("have.class", "vs-c-auth-modal-body__heading");
});
it("login with valid credentials", () => {
    loginPage.login(Cypress.env("loginEmail"), Cypress.env("loginPassword"));
    loginPage.searchButton
    .should("be.visible")
    .and("exist");
});
});