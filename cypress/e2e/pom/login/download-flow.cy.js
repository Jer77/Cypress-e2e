import loginPage from "../../pages/login/login-page";
import principalPage from "../../pages/principal/principal-page";
import purchaseOrdersPage from "../../pages/purchase-orders/purchase-orders-page";

describe('Description', () => {
    beforeEach(() => {
        cy.visit('https://sodexo.iconstruye.com/');
    })

    it('Login correct', () => {
        loginPage.typeUsername('emoreno');
        loginPage.typeCompany('sodexo');
        loginPage.typePassword('rrtfpkvo123123');
        loginPage.clickLogin();
        cy.screenshot('after_login');
        cy.wait(5000, { timeout: 30000 });

        cy.get(principalPage.elements.welcomeTitle()).should('be.visible');

        principalPage.elements.welcomeTitle().should('have.text', 'Bienvenido a Su Escritorio Sr(a). Eliezer Moreno');
        cy.wait(3000, { timeout: 30000 });
        principalPage.clickReception();
        principalPage.clickPurchaseOrder();

        cy.get(purchaseOrdersPage.elements.searchPurchOrderTitle()).should('have.text', 'Busqueda de Ordenes de Compra para Recibir');
        cy.get(purchaseOrdersPage.elements.searchPurchOrderTitle()).should('be.visible');

        cy.wait(10000, { timeout: 60000 });
    })
})