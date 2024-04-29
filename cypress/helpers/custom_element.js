export const customElement = (selector) => {
  const element = {
    isVisible() {
      cy.get(selector).should("be.visible");
      return element;
    },
    isNotVisible() {
      cy.get(selector).should("not.be.visible");
      return element;
    },
    hasText(text) {
      cy.get(selector).should("have.text", text);
      return element;
    },
    containsText(text) {
      cy.get(selector).should("contain.text", text);
      return element;
    },
    hasValue(value) {
      cy.get(selector).should("have.value", value);
      return element;
    },
    hasPlaceholder(placeholder) {
      cy.get(selector).should("have.attr", "placeholder", placeholder);
      return element;
    },
    hasAttribute(attribute, value) {
      cy.get(selector).should("have.attr", attribute, value);
      return element;
    },
    scrollIntoView() {
      cy.get(selector).scrollIntoView();
      return element;
    },
    get() {
      return cy.get(selector);
    },
  };
  return element;
};
