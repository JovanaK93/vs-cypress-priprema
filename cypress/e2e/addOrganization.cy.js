/// <reference types = "Cypress" />

import { addOrganization } from "../page_object/addOrganization";
import { loginPage } from "../page_object/login";

describe("add organization", () => {
    beforeEach("home page", () => {
        cy.visit("/login");
        loginPage.login(Cypress.env("loginEmail"), Cypress.env("loginPassword"));
        loginPage.searchButton.should("be.visible");
    });

    it("add organization", () => {
        addOrganization.addOrganizationCard.click();
        addOrganization.organizationName.type("Vezba");
        addOrganization.nextButton.click();
        addOrganization.nextButton.click();
        cy.get('button').contains("OK").click();
        addOrganization.addNewBoard
        .should("be.visible")
        .and("have.class", "vs-c-organization-boards__item--add-new")
        .and("exist");
    });

});

