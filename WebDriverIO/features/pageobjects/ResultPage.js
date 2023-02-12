const { expect } = require('chai')
const AbstractPage = require('./AbstractPage')

let randomArray = []
let articleIndex, articleLocation, articleJobTitle
let finDataPreFilter = 0
class ResultPage extends AbstractPage {

  //verify city
  get individualJobLocationCity() { return $('(//article/descendant::li[2][contains(text(),"' + articleLocation + '")])[' + articleIndex + ']') }

  //verify engineer
  get individualJobLocationHeader() { return $('(//article/descendant::h2/a[contains(text(),"' + articleJobTitle + '")])[' + articleIndex + ']') }


  get lblEasyApply() {
    return $('(//span[contains(text(),"Apply")])[1]')
  }

  get chkBoxFinServicesCount() {
    return $('//*[contains(text(),"Specialisms")]/following::ul/descendant::a[contains(text(),"Financial Services")]/following::span[1]')
  }

  get chkBoxFinServices() {
    return $('//*[contains(text(),"Specialisms")]/following::ul/descendant::a[contains(text(),"Financial Services")]')
  }

  get lblJobCount() {
    return $('//h1/preceding::span[1]')
  }

  get articleJobData() {
    return $$('//article')
  }

  //Result Page methods
  async verifyRandomEngineerData() {

    //multiple elements
    let jobDataArray = await this.articleJobData
    await super.waitAndDisplayed(this.chkBoxFinServices)

    // articleIndex, articleLocation
    articleIndex = 3
    articleLocation = 'London'
    articleJobTitle = 'Engineer'
    await super.waitAndDisplayed(this.individualJobLocationCity);
    let datatempLondon = await this.individualJobLocationCity.getText();

    await this.generateRandomNumber(15);

    //Verify city London
    for (var iCtr = 0; iCtr <= 4; iCtr++) {
      articleIndex = randomArray[iCtr]
      await super.waitAndDisplayed(this.individualJobLocationCity);
      // let datatempLondon = await this.individualJobLocationCity.getText();
      expect(await this.individualJobLocationCity.getText()).to.be.equal(articleLocation)
    }



    //Verify header 
    for (var iCtr = 0; iCtr <= 4; iCtr++) {
      articleIndex = randomArray[iCtr]
      await super.waitAndDisplayed(this.individualJobLocationHeader);
      // let datatempLondon = await this.individualJobLocationCity.getText();
      expect(await this.individualJobLocationHeader.getText()).contains(articleJobTitle)
      console.log('The job header is:  ', await this.individualJobLocationHeader.getText())
      console.log('Index is is:  ', articleIndex)
    }
  }

  async verifyLocationData() {
    //multiple elements
    let jobDataArray = await this.articleJobData
    await super.waitAndDisplayed(this.chkBoxFinServices)

    // articleIndex, articleLocation
    articleIndex = 3
    articleLocation = 'London'
    articleJobTitle = 'Engineer'
    await super.waitAndDisplayed(this.individualJobLocationCity);
    let datatempLondon = await this.individualJobLocationCity.getText();

    await this.generateRandomNumber(15);

    //Verify city London
    var tempCityCounter = 0;
    for (var iCtr = 1; iCtr <= jobDataArray.length; iCtr++) {
      if (tempCityCounter == 5) { break; }

      articleIndex = iCtr
      await super.waitAndDisplayed(this.individualJobLocationCity);
      expect(await this.individualJobLocationCity.getText()).to.be.equal(articleLocation)
      tempCityCounter = tempCityCounter + 1;
    }

  }

  async filterFinancialData() {
    await super.waitAndDisplayed(this.chkBoxFinServices)
    finDataPreFilter = await this.chkBoxFinServicesCount.getText()
    finDataPreFilter = await finDataPreFilter.replace('(', '').replace(')', '')

    //Click on link of Fin service
    await this.chkBoxFinServices.click();
    await super.waitAndClickable(this.lblEasyApply)
  }

  async verifyFilteredData() {
    await super.waitAndClickable(this.lblEasyApply)

    const  finDataPostFilter = await this.lblJobCount.getText();

    await expect(finDataPreFilter).to.be.equal(finDataPostFilter, 'Finance job data is not reflected in application')
  }

  //Generate random number
  async generateRandomNumber(recordNumber) {
    for (var iCtr = 1; iCtr <= 5; iCtr++) {
      randomArray.push(Math.floor(Math.random() * recordNumber) + 1)
    }
    console.log(randomArray);
  }

}
module.exports = new ResultPage();
