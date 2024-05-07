class PrincipalPage {
    elements = {
        welcomeTitle: () => cy.get('//td[@class="auto-style2"]'),
        receptionButton: () => cy.get("//div[5]/div/div/div/a/span[@style='white-space:nowrap;cursor:pointer;width:100%;display:block;'][text()='Recepción']"),
        purchaseOrders: () => cy.get("/html/body/form/div[2]/table/tbody/tr/td/div[5]/div/div/div/div/table/tbody/tr/td[4]/div[2]/div/table/tbody/tr[1]/td/div/a/span[2]"),
    }

    clickReception () {
        this.elements.receptionButton().click();
    }

    clickPurchaseOrder() {
        this.elements.purchaseOrders().click();
    }
}

module.exports = new PrincipalPage();