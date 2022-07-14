describe("Cart Page Test Cases", () => {
  it("Able To Navigate To Cart Page", () => {
    cy.visit("/cart");
    cy.get(".alert").should("include.text", "Your cart is empty");
    cy.contains("Start Shopping").should("exist").click();
  });

  it("Adding Items To Cart", () => {
    cy.get("div.products").should("exist");
    cy.get("#product-1").find("a").click();
    cy.get(".cart-count").should("have.text", "1");
    cy.get("#product-8").find("a").click();
    cy.get(".cart-count").should("have.text", "2");
    cy.contains("Cart (").should("exist").click();
  });

  it("Testing Checkout and Shopping", () => {
    cy.contains("Checkout").should("exist").click();
    cy.contains("Cart (").should("exist").click();
    cy.contains("Shopping").should("exist").click();
    cy.contains("Cart (").should("exist").click();
  });

  it("Removing an Item From Shopping Cart", () => {
    cy.visit("/cart");
    cy.contains("Start Shopping").should("exist").click();
    cy.get("div.products").should("exist");
    cy.get("#product-1").find("a").click();
    cy.get(".cart-count").should("have.text", "1");
    cy.get("#product-8").find("a").click();
    cy.get(".cart-count").should("have.text", "2");
    cy.contains("Cart (").should("exist").click();
    cy.get("a.remove-item:eq(0)").should("exist").click();
    cy.get("h1").should("have.text", "Remove Item");
    cy.contains("No").should("exist").click();
    cy.get("a.remove-item:eq(0)").should("exist").click();
    cy.get("h1").should("have.text", "Remove Item");
    cy.contains("Yes").should("exist").click();
    cy.get(".cart-msg .cart-count").should("have.text", "1");
    cy.get("#nav-cart .cart-count").should("have.text", "1");
    cy.get(".total").should("include.text", "9.99");
  });

  it("Updating an Item From Shopping Cart", () => {
    cy.visit("/cart");
    cy.contains("Start Shopping").should("exist").click();
    cy.get("div.products").should("exist");
    cy.get("#product-1").find("a").click();
    cy.get(".cart-count").should("have.text", "1");
    cy.get("#product-8").find("a").click();
    cy.get(".cart-count").should("have.text", "2");
    cy.contains("Cart (").should("exist").click();
    cy.get("input.input-mini:eq(0)").clear().type(5);
    cy.get(".cart-msg .cart-count").should("have.text", "6");
    cy.get("#nav-cart .cart-count").should("have.text", "6");
    cy.get(".total").should("include.text", "74.94");
    cy.get("tr.cart-item td:eq(3)").should("include.text", "64.95");
  });

  it("Emptying Cart", () => {
    cy.contains("Empty Cart").click();
    cy.get("h1").should("have.text", "Empty Cart");
    cy.contains("Yes").click();
    cy.get(".cart-count").should("have.text", "0");
    cy.get(".alert").should("include.text", "Your cart is empty");
  });

  it("Able To Navigate To Checkout Page", () => {
    cy.contains("Start Shopping").should("exist").click();
    cy.get("div.products").should("exist");
    cy.get("#product-1").find("a").click();
    cy.get(".cart-count").should("have.text", "1");
    cy.get("#product-8").find("a").click();
    cy.get(".cart-count").should("have.text", "2");
    cy.contains("Cart (").should("exist").click();
    cy.contains("Check Out").click();
  });

  it("Submiting Default Checkout Form Should Throw An Error", () => {
    cy.get(".alert").should("include.text", "Almost there");
    cy.contains("Submit").click();
    cy.get(".alert").should(
      "include.text",
      "but we can't send your items unless you complete the form correctly."
    );
  });

  it("Submiting Checkout Form With Required Fields Should Generate Success Response", () => {
    cy.get("#forename").type("John");
    cy.get("#email").type("john.example@planit.net.au");
    cy.get("#address").type("101 Example Road");
    cy.get("#cardType").select("Visa");
    cy.get("#card").type("1234987612349876");
    cy.contains("Submit").click();
    cy.get(".alert", { timeout: 40000 }).should(
      "include.text",
      "your order has been accepted. Your order nuumber is"
    );
    cy.contains("Shopping Again").should("exist");
  });

  it("Going Back To Shopping Again", () => {
    cy.contains("Shopping Again").should("exist").click();
    cy.url().should("include", "/shop");
  });
});
