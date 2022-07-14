describe("Contact Page Test Cases", () => {
  it("Able To Navigate To Contact Page", () => {
    cy.visit("/contact");
    cy.get("form").should("exist");
  });

  it("Submiting Default Form Should Throw An Error", () => {
    cy.get(".alert").should("include.text", "tell it how it is.");
    cy.contains("Submit").click();
    cy.get(".alert").should(
      "include.text",
      "but we won't get it unless you complete the form correctly."
    );
  });

  it("Submiting Form With Required Fields Should Generate Success Response", () => {
    cy.get("#forename").type("John");
    cy.get("#email").type("john.example@planit.net.au");
    cy.get("#message").type("Tells us about it..");
    cy.contains("Submit").click();
    cy.get(".alert", { timeout: 40000 }).should(
      "include.text",
      "we appreciate your feedback."
    );
    cy.contains("Back").should("exist");
  });

  it("Going Back To Contact Page", () => {
    cy.contains("Back").should("exist").click();
    cy.url().should("include", "/contact");
  });
});
