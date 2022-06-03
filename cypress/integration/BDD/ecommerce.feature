Feature: END to END Ecommerce validation



    application Regression

    Scenario: ECommerce products delivery 
    Given I open ECommerce Page
    When I add items to Cart
    And Validate the total prices
    Then select the country submit and verify Thankyou

