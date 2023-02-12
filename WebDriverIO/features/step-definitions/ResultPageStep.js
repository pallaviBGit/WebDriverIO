const { Given, Then, When } = require('@cucumber/cucumber')
const ResultPage = require('../pageobjects/ResultPage')

// ------------------------
Then(/^I verify 5 randomly selected results contain the engineer in the search result page headings$/, async () => {
  await ResultPage.verifyRandomEngineerData();
})

Then(/^I verify 5 job results are within areas in the location searched$/, async () => {
  await ResultPage.verifyLocationData();
})

Then(/^I filter Filter Financial Services jobs from the jobs specialisms$/, async () => {
  await ResultPage.filterFinancialData();
})

Then(/^I verify data is filtered correctly$/, async () => {
  await ResultPage.verifyFilteredData();
})
