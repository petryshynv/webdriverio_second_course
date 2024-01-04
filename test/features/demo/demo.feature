Feature: Demo Feature

    @demo
    Scenario Outline: Run first demo feature
        Given Google page is opened
        When I agree to the cookie policy
        When Search with <SearchItem>
        Then Click on the first search result
        Then URL shoul match <ExpectedURL>

        Examples:
            | TestID | SearchItem | ExpectedURL |
            | DEMO_TC001  | WDIO  |  https://webdriver.io/  |