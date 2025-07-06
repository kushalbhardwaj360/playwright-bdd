Feature: User Register for a new Account

    @registration
    Scenario: User is able to create a new account
        Given The user is on the hompage
        When The user clicks on Register button
        Then The user enters all the details in the form
        Then The user's account is created
