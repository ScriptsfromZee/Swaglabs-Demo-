describe("Login Test Suite", () => {

  it("Swaglabs Login using Xpath", () => {
    cy.log("Test 1 has started");

    // Navigate to the Swag Labs URL
    cy.visit("https://www.saucedemo.com/v1/");
    cy.log("Navigated to URL");

    // Fill in the username
    cy.xpath("//input[@id='user-name']").type("standard_user");
    cy.log("Username has been filled");

    // Fill in the password
    cy.xpath("//input[@id='password']").type('secret_sauce');

    // Click the login button
    cy.xpath("//input[@id='login-button']").click();
    cy.log("User has signed in successfully");
  });

  it("Swaglabs Login using CSS Selectors", () => {
    cy.log("Test 2 has started");

    // Navigate to the Swag Labs URL
    cy.visit("https://www.saucedemo.com/v1/");
    cy.log("Navigated to URL");

    // Fill in username and password using CSS selectors
    cy.get('input[type="text"]').type("standard_user");
    cy.get('input[type="password"]').type("secret_sauce");

    // Click the login button
    cy.get('input[type="submit"]').click();
    cy.log("User has signed in successfully");

    // Add items to cart
    cy.get('button[class="btn_primary btn_inventory"]').eq(0).click();
    
    // Ensure the second item is visible before clicking
    cy.get('button[class="btn_primary btn_inventory"]').eq(1).should('be.visible').click();

    // Scroll to and verify item visibility
    cy.contains("Test.allTheThings").scrollIntoView().should("be.visible");

    // Add another item to cart
    cy.get("#inventory_container > div > div:nth-child(6) > div.pricebar > button").should('be.visible').click();
    
    cy.log("User has successfully filled cart");

    // Click on the cart icon after ensuring it's visible
    cy.get('svg[aria-hidden="true"]').should('be.visible').click();

    // Proceed to checkout after ensuring the button is visible
    cy.get('a[class="btn_action checkout_button"]').should('be.visible').click();

    // Fill out checkout information
    cy.get('input[id="first-name"]').type("David");
    
    // Fill out last name and postal code after ensuring visibility
    cy.get('input[id="last-name"]').should('be.visible').type("Jones");
    
    cy.get('input[id="postal-code"]').should('be.visible').type("500101");

   // Submit the checkout form
   cy.get('input[type="submit"]').click();

   // Return to cart after ensuring visibility
   cy.get('a[class="btn_action cart_button"]').should('be.visible').click();

   cy.log("User has successfully placed an order");
  });  
});