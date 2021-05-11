Feature: Login
    @Req1
    Scenario: Login to inHeart Portal Website 
        Given User is at the login page
        When User enters login and password credentials
        And User clicks on Sign in button
        Then User should not be able to login
    @Req3
    Scenario: Login to inHeart Portal Website with incorrect password credentials
        Given User is at the login page
        When User enters incorrect '<password>'' credentials
        And User clicks on Sign in button
        Then User should be locked out for 30 minutes
        Examples:
            |password|
            |admin|
            |123|
            |test|
            |admin|
            |123|
            |test|