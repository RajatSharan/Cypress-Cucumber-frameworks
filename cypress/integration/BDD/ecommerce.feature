Feature: END to END Ecommerce validation



    application Regression

    @Regression
    Scenario: ECommerce products delivery 
    Given I open ECommerce Page
    When I add items to Cart
    And Validate the total prices
    Then select the country submit and verify Thankyou

    @Smoke
    Scenario: Filling the form to shop
    Given I open ECommerce Page
    When I fill the form details
    |Name|Gender|
    |Bobz|Male|
    Then validate the forms behaviour 
    |Name|Gender|
    |Bobz|Male|
    And select the Shop Page