beforeEach(() => {
  cy.visit("http://localhost:8080");
  cy.server();
  cy.route("**/skills/**", require("../fixtures/skills.json")).as("skills");
});

it("выдает ошибку если не заполнено полe", () => {
  cy.get("#cy-submit-btn").click();
  cy.on("window:alert", (str) => {
    expect(str).to.equal("Заполни");
  });
});

it("Отправляет запрос", () => {
  cy.get("#cy-login").type("login");
  cy.get("#cy-submit-btn").click();

  cy.wait("@skills").then((xhr) => {
    expect(xhr.status).to.equal(200);
  });
});

it("Кол-во элементов соответствует кол-ву в ответе", () => {
  cy.get("#cy-login").type("login");
  cy.get("#cy-submit-btn").click();

  cy.wait("@skills").then((xhr) => {
    const items = xhr.response.body;
    const domElems = Cypress.$("#cy-list li");
    expect(domElems.length).to.equal(items.length);
  });
});

it("содержит необходимые заголовки", () => {
  cy.get("#cy-login").type("login");
  cy.get("#cy-submit-btn").click();

  cy.wait("@skills").then((xhr) => {
    const items = xhr.response.body;
    const domElems = Cypress.$("#cy-list li");

    const titles = [];

    domElems.each((ndx, item) => {
      titles.push(item.textContent);
    });

    const titlesAreRelevant = titles.every((item, i) => {
      return item === items[i].title
    })
    
    expect(titlesAreRelevant).to.be.true;
  });
});
