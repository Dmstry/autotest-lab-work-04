const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function runScript() {
  const options = new chrome.Options();

  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    await driver.get('http://suninjuly.github.io/math.html');
    const x = await driver.findElement(By.id('input_value')).getText();
    const result = Math.log(Math.abs(12 * Math.sin(parseInt(x, 10))));

    await driver.findElement(By.id('answer')).sendKeys(result);
    await driver.findElement(By.id('robotCheckbox')).click();
    await driver.findElement(By.id('robotsRule')).click();
    await driver.findElement(By.css('button[type="submit"]')).click();
    await driver.sleep(10000);
  } finally {
    await driver.quit();
  }
}

runScript();
