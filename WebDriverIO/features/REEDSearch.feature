Feature: Reed search results
  Scenario: Verifying relevant results for REED Search

    Given I am on the home page
    Then I click accept cookies
    When I fill the job search details
      | keyword  | location          |
      | engineer | South West London |
    Then I click search results
    Then I verify 5 randomly selected results contain the engineer in the search result page headings
    Then I verify 5 job results are within areas in the location searched
    Then I filter Filter Financial Services jobs from the jobs specialisms
    Then I verify data is filtered correctly

