class loginPage {
    elements = {
        usernameInput: () => cy.get('#txtUsuario'),
        companyInput: () => cy.get('#txtEmpresa'),
        passwordInput: () => cy.get('#txtClave'),
        loginButton: () => cy.get('a[href*="btnIngresar"] img#Image2'),
    }

    typeUsername(username) {
        this.elements.usernameInput().type(username);
    }

    typeCompany(company) {
        this.elements.companyInput().type(company);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickLogin () {
        this.elements.loginButton().click();
    }
}

module.exports = new loginPage();
