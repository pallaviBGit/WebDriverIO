const { Given, Then, When } = require('@cucumber/cucumber')
// const HomePage = require('../pageobjects/HomePage')
// const AbstractPage = require('./AbstractPage')
const HomePage = require('../pageobjects/HomePage')


Given(/^I am on the home page$/, async () => {
  await HomePage.visit()
})

Then(/^I click accept cookies$/, async () => {
  await HomePage.acceptCookies();
})

Then(/^I fill the job search details$/, async (dataTable) => {
  await HomePage.fillJobSearchDetails(dataTable);
})

Then(/^I click search results$/, async () => {
  await HomePage.clickSearchJobs();
})