const { faker } = require('@faker-js/faker');
const fakeUsername = faker.internet.userName();
const fakepassword=  faker.internet.password()

exports.adminPage=class adminPage{
    constructor(page){
        this.page=page
        this.adminTab=page.locator('//span[text()="Admin"]')
        this.userManagement=page.locator('//span[text()="User Management "]')
        this.addButton=page.locator('//button[text()=" Add "]')
        this.userRoleDropdown=page.locator('(//div[@class="oxd-select-text-input"])[1]')
        this.userRoleSelect=page.locator("//div[@role='option']/span[text()='Admin']")
        this.employeeNameInput=page.locator('//input[@placeholder="Type for hints..."]')
        this.employeeName=page.locator('(//div[@class="oxd-autocomplete-option"])[1]')
        this.statusDropdown=page.locator('(//div[@class="oxd-select-text-input"])[2]')
        this.statusSelect=page.locator("(//div[@class='oxd-select-option'])[2]")
        this.usernameInput=page.locator("(//input[contains(@class,'oxd-input oxd-input')])[2]")
        this.passwordInput=page.locator("(//input[contains(@class,'oxd-input oxd-input')])[3]")
        this.confirmPasswordInput=page.locator("(//input[contains(@class,'oxd-input oxd-input')])[4]")
        this.saveButton=page.locator('//button[text()=" Save "]')

    }


    async goToAdminTab(){
        await this.adminTab.click()
    }
    async addUser(){
        await this.addButton.click();
        await this.userRoleDropdown.click();
        await this.userRoleSelect.click()
        await this.page.waitForTimeout(3000)
        await this.statusDropdown.click();
        await this.page.waitForTimeout(3000)

        await this.statusSelect.click()
        await this.page.waitForTimeout(3000)

        await this.employeeNameInput.fill('a')
        await this.page.waitForTimeout(2000)
        await this.employeeName.click()
        await this.page.waitForTimeout(2000)
        await this.usernameInput.fill("fakeusername")
        await this.page.waitForTimeout(2000)
        await this.passwordInput.fill("fakepassword")
        await this.page.waitForTimeout(2000)
        await this.confirmPasswordInput.fill("fakepassword")
        await this.page.waitForTimeout(2000)
        await this.saveButton.click()
        await this.page.waitForTimeout(3000)
        
    }
}