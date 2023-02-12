const { expect } = require('chai')
const AbstractPage = require('./AbstractPage')

class HomePage extends AbstractPage {

  get btnAccept() {
    return $('//button[@id="onetrust-accept-btn-handler"]')
  }

  get txtKeyword() {
    return $('//input[@id="main-keywords"]')
  }
  get txtLocation() {
    return $('//input[@id="main-location"]')
  }
  get btnSearchJobs() {
    return $('//*[@id="homepageSearchButton"]')
  }

  //Methods for App
  async acceptCookies() {
    super.waitAndDisplayed(this.btnAccept);
    this.btnAccept.click();
  }

  async fillJobSearchDetails(dataTable) {
    super.waitAndDisplayed(this.txtKeyword);
    super.waitAndDisplayed(this.txtLocation);

    await this.txtKeyword.setValue(dataTable.rows()[0][0])
    await this.txtLocation.setValue(dataTable.rows()[0][1])
  }

  async clickSearchJobs() {
    super.waitAndDisplayed(this.btnSearchJobs);
    await this.btnSearchJobs.click()
  }

  async visit() {
    await browser.maximizeWindow()
    await browser.url('/')
  }
}
module.exports = new HomePage();
