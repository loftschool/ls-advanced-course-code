beforeEach(() => {
  cy.visit("http://localhost:8080/");
  cy.get(".openOverlay").click();
});

it("Открывает оверлей", () => {
  cy.get(".content").then(($el) => {
    const text = $el.text();

    cy.wrap(text).should("not.be.empty");
    cy.wrap(text).should("not.contain", "null");
    cy.wrap(text).should("not.contain", "undefined");
  });
});

it("Закрывает оверлей", () => {
  cy.get(".close").click();
  cy.get(".overlay").should("not.be.visible");
});

it("Закрывает оверлей по клику за пределы", () => {
  cy.get(".overlay").then(el => {
    el.click();
  });

  cy.get(".overlay").should("not.be.visible");
});
