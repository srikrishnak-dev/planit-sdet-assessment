describe("Home Page Test Cases", () => {
  it("Able To Navigate To Home Page", () => {
    cy.visit("/");
    cy.contains("Start Shopping").should("exist");
  });

  it("Start Shopping By Clicking Call To Action", () => {
    cy.visit("/");
    cy.contains("Start Shopping").should("exist").click();
    cy.url().should("include", "/shop");
  });
});
