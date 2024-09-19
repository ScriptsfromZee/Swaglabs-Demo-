describe("Login Test Suite", () => {

  it ("Swaglabs Login using Xpath", () => {
    cy. log("Test 1 has started");

    cy. visit ("https://www.saucedemo.com/v1/");

    cy. log("Navigated to URL")

    cy.xpath("//input [@id= 'user-name' ]").type("standard_user")

    cy. log("Username has been filled")

    cy.xpath ("//input [@id= 'password']").type('secret_sauce')

    cy.xpath("//input [@id='login-button']"). click()

    cy. log("User has signed in succesfully");
  });


  it("Swaglabs Login using CSS Selectors", () => {
    cy.log("Test 2 has started");

    cy.visit("https://www.saucedemo.com/v1/");

    cy.log("Navigated to URL");

    cy.get('input[type="text"]').type("standard_user");

    cy.get('input[type="password"]').type("secret_sauce");

    cy.get('input[type="submit"]').click();

    cy.log("User has signed in succesfully");

    cy.get('button[class="btn_primary btn_inventory"]').eq(0).click();

    cy.wait(2000);

    cy.get('button[class="btn_primary btn_inventory"]').eq(1).click();

    cy.wait(2000);

    cy.contains("Test.allTheThings").scrollIntoView().should("be.visible");

    cy.wait(2000);

    cy.get("#inventory_container > div > div:nth-child(6) > div.pricebar > button").click();

    cy.log("User has succesfully filled cart");

    cy.wait(1000);

    cy.get('svg[aria-hidden="true"]').click();

    cy.wait(1000);

    cy.get('a[class="btn_action checkout_button"]').click();

    cy.get('input[id="first-name"]').type("David");

    cy.wait(1500);

    cy.get('input[id="last-name"]').type("Jones");

    cy.wait(1500);

    cy.get('input[id="postal-code"]').type("500101");

    cy.get('input[type="submit"]').click();

    cy.wait(1200);

    cy.get('a[class="btn_action cart_button"]').click();

    cy.log("User has succesfully placed an order");
  });  
});       
     

