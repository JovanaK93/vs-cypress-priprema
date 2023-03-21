class AddOrganization {

    get addOrganizationCard() {
        return cy.get(".vs-c-my-organization--add-new");
    }

    get organizationName() {
        return cy.get("input");
    }

    get nextButton() {
        return cy.get("button[name='next_btn']");
    }

    get addNewBoard() {
        return cy.get(".vs-c-organization-boards__item--add-new");
    }

    AddOrganization(organizationName) {
        this.organizationName.type(organizationName);
        this.nextButton.click();
    }
    
}

export const addOrganization = new AddOrganization();
