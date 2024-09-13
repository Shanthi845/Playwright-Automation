// @ts-check
const { test, expect } = require('@playwright/test');

test.skip('has title', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 
  

   await page.locator('//span[text()="Admin"]').click()
  // await page.locator('//span[text()="User Management "]').click()
  // await page.locator('//button[text()=" Add "]').click()
  // await page.locator('(//div[text()="-- Select --"])[1]').click()
  // await page.locator('//span[text()="ESS"]').click()
  // await page.locator('//input[@placeholder="Type for hints..."]').fill("oi oi oi")
  // await page.keyboard.press('Enter');
  // await page.locator('(//div[text()="-- Select --"])[2]').click()
  // await page.locator('//div[text()="Enabled"]').click()
  // await page.locator('(//input)[3]').fill("swetha1")
  // await page.locator('(//input)[4]').fill('123456')
  // await page.locator('(//input)[5]').fill('123456')
  // await page.locator('//button[text()=" Save "]').click()

  await page.locator('//span[text()="PIM"]').click()
  await page.locator('//a[text()="Add Employee"]').click()
  await page.locator('//input[@name="firstName"]').fill("ss")
  await page.waitForTimeout(2000)







  // await page.locator("//span[text()='My Info']").click()
  // await page.locator('//input[@placeholder="First Name"]').click()
  // await page.locator('//input[@placeholder="Middle Name"]').click()
  // await page.locator('//input[@placeholder="Last Name"]').click()
  // await page.locator("(//input[contains(@class,'active')])[5]").click()
  // await page.locator("(//input[contains(@class,'active')])[6]").click()
  // await page.locator("(//input[contains(@class,'active')])[7]").click()
  // await page.locator('(//input[@placeholder="yyyy-dd-mm"])[1]').click()
  // await page.locator('//div[text()="Indian"]').click()
  // await page.locator('//div[text()="Single"]').click()
  // await page.locator('(//input[@placeholder="yyyy-dd-mm"])[2]').click()
  // await page.locator("(//input[@value='2'])[1]").click()
  //  await page.locator("(//button[@type='button'])[4]").click()
  //  await page.waitForTimeout(2000)
  //  await page.locator("//input[@type='file']").setInputFiles('./assets/wallpaper.jpg');
  //  await page.waitForTimeout(4000)


//assertions

await expect(page).toHaveTitle('OrangeHRM');


await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee")
await expect(page.locator('//span[text()="Admin"]')).toBeVisible()

await expect( page.locator('//input[@name="firstName"]')).toHaveValue('ss')



});

