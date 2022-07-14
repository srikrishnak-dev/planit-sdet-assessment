describe("Shop Page Test Cases", () => {
  it("Able To Navigate To Shop Page", () => {
    cy.visit("/shop");
    cy.get("div.products").should("exist");
  });

  it("Able To Start Shopping By Adding Items To Cart", () => {
    cy.visit("/");
    cy.contains("Start Shopping").should("exist").click();
    cy.get("div.products").should("exist");
    cy.get("#product-1").find("a").click();
    cy.get(".cart-count").should("have.text", "1");
    cy.get("#product-8").find("a").click();
    cy.get(".cart-count").should("have.text", "2");
  });
});
