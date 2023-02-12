module.exports = class AbstractPage {
  async visit(url) {
    await browser.url(url)
  }

  async waitAndDisplayed(selector, timeToWait) {
    timeToWait = typeof await timeToWait !== 'undefined' ? await timeToWait * 1000 : 60000;
    const returnValue = await selector.waitForDisplayed({ timeout: timeToWait, reverse: false, timeoutMsg: `Element not displayed after ${timeToWait / 1000} seconds`, interval: 500 })
  }

  async waitAndCheckExist(selector, timeToWait) {
    timeToWait = typeof await timeToWait !== 'undefined' ? await timeToWait * 1000 : 60000;
    const returnValue = await selector.waitForExist({ timeout: timeToWait, reverse: false, timeoutMsg: `Element not displayed after ${timeToWait / 1000} seconds`, interval: 500 })
  }

  async waitAndClickable(selector, timeToWait) {
    timeToWait = typeof await timeToWait !== 'undefined' ? await timeToWait * 1000 : 30000;
    const returnValue = await selector.waitForClickable({ timeout: timeToWait, reverse: false, timeoutMsg: `Element not displayed after ${timeToWait / 1000} seconds`, interval: 500 })
  }
}
