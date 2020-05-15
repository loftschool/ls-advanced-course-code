it("Листает слайдер вправо", () => {
  cy.visit("http://localhost:8080/");

  cy.get("#right").click();

  cy.wait(500);

  cy.get(".items").then(($el) => {
    expect($el).to.have.css("right", "100px");
  });

  cy.get(".item:nth-child(2)").then(($el) => {
    const slider = $el.closest(".slider");

    const sliderPos = slider.offset().left;
    const itemPos = $el.offset().left;

    expect(itemPos).to.equal(sliderPos);
  });
});

it("Не сбоит при отсутсвии листаемого слайда - влево", () => {
  cy.visit("http://localhost:8080/");

  cy.get("#left").click();

  cy.wait(500);

  cy.get(".items").then(($el) => {
    expect($el).to.have.css("right", "0px");
  });

  cy.get(".item:nth-child(1)").then(($el) => {
    const slider = $el.closest(".slider");

    const sliderPos = slider.offset().left;
    const itemPos = $el.offset().left;

    expect(itemPos).to.equal(sliderPos);
  });
});
