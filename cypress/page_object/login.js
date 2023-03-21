class LoginPage {

    get headingText() {
        return cy.get("h1");
    }

    get emailInput() {
        return cy.get("input").eq(0);
    }

    get passwordInput() {
        return cy.get("input").eq(1);
    }

    get searchButton() {
        return cy.get("button").eq(0);
    }

    login(email, password) {
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.searchButton.click();
    }
}
export const loginPage = new LoginPage();
