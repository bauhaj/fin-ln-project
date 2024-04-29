import { customElement } from "../../helpers/custom_element";
import { LoginPage } from "./login_page";

export class RegisterPage {
  constructor() {
    this.usernameInput = customElement("input[data-testid=username-input]");
    this.passwordInput = customElement("input[data-testid=password-input]");
    this.emailInput = customElement("input[data-testid=email-input]");
    this.submitButton = customElement("button[data-testid=submit-button]");
    this.pageHeader = customElement("h1.title");
    cy.intercept("/tegb/register").as("register_api");
  }

  pageHeaderIsVisible() {
    this.pageHeader.get().should("be.visible");
    return this;
  }

  typeUsername(username) {
    this.usernameInput.get().type(username);
    return this;
  }

  passwordHavePlacelhoder(placeholderValue) {
    this.passwordInput
      .get()
      .should("have.attr", "placeholder", placeholderValue);
    return this;
  }

  typePassword(password) {
    this.passwordInput.get().type(password);
    return this;
  }

  typeEmail(email) {
    this.emailInput.get().type(email);
    return this;
  }

  clickSubmit() {
    this.submitButton.get().click();
    cy.wait("@register_api");
    return new LoginPage();
  }
}
