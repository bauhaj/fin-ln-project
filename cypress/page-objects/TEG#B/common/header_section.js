import { LoginPage } from "../login_page";

export class HeaderSection {
  constructor() {
    this.logoutButton = ".logout-link";
  }

  clickLogoutButton() {
    cy.get(this.logoutButton).click();
    return new LoginPage();
  }
}
