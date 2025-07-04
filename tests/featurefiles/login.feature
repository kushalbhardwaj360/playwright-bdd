Feature: User Login
    
    Scenario: User is able to login
    Given The user is on the hompage
    When the user clicks on Login button
    Then the user enters the valid credentials
    And the user logs in
    And the user lands on My Account page

    