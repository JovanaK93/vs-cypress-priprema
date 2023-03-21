/// <reference types = "Cypress"/>

import { loginPage } from "../page_object/login";
import { addOrg, addOrganization } from "../page_object/addOrganization";
import { archiveOrg, ArchiveOrg, archiveOrganization } from "../page_object/archiveOrganization";

describe("archive Organization", () => {
  before("login", () => {
    cy.visit("/login");
    loginPage.login(Cypress.env("loginEmail"), Cypress.env("loginPassword"));
    loginPage.searchButton.should("be.visible");
    addOrganization.addOrganizationCard.click();
    addOrganization.organizationName.type("Nova organizacija");
    addOrganization.nextButton.click();
    addOrganization.nextButton.click();
    cy.get('button').contains("OK").click();
    addOrganization.addNewBoard
    .should("be.visible")
    .and("have.class", "vs-c-organization-boards__item--add-new")
    .and("exist");
  });
  
  it("archive organization", () => {
    archiveOrganization.settingsButton.click();
    archiveOrganization.archiveButton.click();
    archiveOrganization.confirmButton.click();
    archiveOrganization.deleteOrganizationButton
      .contains("Delete Organization")
      .should("be.visible");
  });
});