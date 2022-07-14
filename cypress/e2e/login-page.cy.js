describe("Login Test Cases", () => {
  it("Able To Navigate To Login", () => {
    cy.visit("/");
    cy.contains("Login").click();
    cy.get(".modal-header h1").should("have.text", "Login");
    cy.get("form").submit();
  });

  it("Login Should Throw An Error By Default Clicking Login", () => {
    cy.get("#loginForm").submit();
    cy.get("#login-error").should(
      "include.text",
      "Your login details are incorrect"
    );
  });

  it("Login Should Throw An Error For Invalid Login", () => {
    cy.get("#loginUserName").type("User Name");
    cy.get("#loginPassword").type("Password");
    cy.get("#loginForm").submit();
    cy.get("#login-error").should(
      "include.text",
      "Your login details are incorrect"
    );
  });
});
