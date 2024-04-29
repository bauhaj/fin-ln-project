import { LoginPage } from "../../page-objects/TEG#B/login_page";
import { faker } from "@faker-js/faker";

describe("E2E User Registration, Account Creation, Profile Completion, Verification", () => {
  beforeEach(() => {
    new LoginPage().openTegBUrl();
  });

  it("Creation of a new user registration", () => {
    const userName = faker.internet.userName();

    new LoginPage()
      .clickRegister()
      .pageHeaderIsVisible()
      .passwordHavePlacelhoder("Heslo")
      .typeUsername(userName)
      .typePassword(Cypress.env("tegB_password"))
      .typeEmail(Cypress.env("tegB_email"))
      .clickSubmit()

      .logoIsVisible()
      .typeUsername(userName)
      .typePassword(Cypress.env("tegB_password"))
      .clickLogin();
  });
});
