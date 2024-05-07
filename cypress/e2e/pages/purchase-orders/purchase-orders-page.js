class PurchaseOrdersPage {
    elements = {
        searchPurchOrderTitle: () => cy.get('//td[@class="titulopagina2"]'),
    }
}

module.exports = new PurchaseOrdersPage();