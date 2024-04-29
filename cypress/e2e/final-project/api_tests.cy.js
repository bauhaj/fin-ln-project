import { LoginPage } from "../../page-objects/TEG#B/login_page";

describe("Api Test For The Login Page", () => {
  it("Check the token and statusresponse in the API on the login page", () => {
    new LoginPage()
      .openTegBUrl()
      .logoIsVisible()
      .typeUsername(Cypress.env("tegB_username"))
      .typePassword(Cypress.env("tegB_password"))
      .clickLogin();
  });
});
