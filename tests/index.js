require('dotenv').config()
const { Builder, By, Key, until } = require('selenium-webdriver')
require('chromedriver')

(async function myFunction() {
	let driver = await new Builder().forBrowser('chrome').build()
	try {
		// Navigate to Url
		await driver.get(process.env.BROWSER_URL)

		// Enter text "cheese" and perform keyboard action "Enter"
		await driver.findElement(By.name('q')).sendKeys('cheese', Key.ENTER)

		let firstResult = await driver.wait(
			until.elementLocated(By.css('h3')),
			10000
		)

		console.log(await firstResult.getAttribute('textContent'))
	} catch (e) {
		console.error(e)
	} finally {
		await driver.quit()
	}
})()
console.log('Test Browser Finished')
