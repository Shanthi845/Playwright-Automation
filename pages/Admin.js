exports.adminPage=class adminPage{
    constructor(page){
        this.page=page
        this.admin_button=page.locator('//span[text()="Admin"]')
        this.user_button=page.locator('//span[text()="User Management "]')
        this.add_button=page.locator('//button[text()=" Add "]')

    }
    async admin(){
        await this.admin_button.click()
        await this.user_button.click()
        await this.add_button.click()
    }
}