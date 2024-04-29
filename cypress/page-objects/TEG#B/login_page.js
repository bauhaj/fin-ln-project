import { customElement } from "../../helpers/custom_element";
import { DashboardPage } from "./dashboard_page";
import { RegisterPage } from "./register_page";

export class LoginPage {
  constructor() {
    this.tegBUrl = "https://tegb-frontend-88542200c6db.herokuapp.com/";
    this.usernameInput = customElement("input[data-testid=username-input]");
    this.passwordInput = customElement("input[data-testid=password-input]");
    this.loginButton = customElement("button[data-testid=submit-button]");
    this.registerButton = customElement("button[data-testid=register-button]");
    this.logoImg = customElement("img[data-testid=logo-img]");
    cy.intercept("/tegb/profile").as("profile_api");
    cy.intercept("/tegb/accounts").as("accounts_api");
    cy.intercept("/tegb/login").as("POST_login_api");
  }

  openTegBUrl() {
    cy.visit(this.tegBUrl);
    return this;
  }

  logoIsVisible() {
    this.logoImg.get().should("be.visible");
    return this;
  }

  typeUsername(username) {
    this.usernameInput.get().type(username);
    return this;
  }

  typePassword(password) {
    this.passwordInput.get().type(password);
    return this;
  }

  clickLogin() {
    let loginResponse = this.loginButton.get().click();
    cy.log("text");
    loginResponse
      .wait("@POST_login_api")
      .its("response")
      .then((response) => {
        cy.wrap(response).its("statusCode").should("eq", 201);
        cy.wrap(response).its("body.access_token").should("exist");
      });
    loginResponse
      .wait("@profile_api")
      .its("response.statusCode")
      .should("eq", 200);
    loginResponse
      .wait("@accounts_api")
      .its("response.statusCode")
      .should("eq", 200);
    return new DashboardPage();
  }

  clickRegister() {
    this.registerButton.get().click();
    return new RegisterPage();
  }
}
