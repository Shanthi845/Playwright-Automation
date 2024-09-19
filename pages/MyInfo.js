exports.MyInfoPage=class MyInfoPage{
    constructor(page){
        this.page=page
        this.myInfoTab=page.locator("//span[text()='My Info']")


    }

    async goToMyInfoTab(){
        await this.myInfoTab.click()
        await this.page.waitForTimeout(2000)
        await this.page.click('(//button[@type="button"])[4]')

    }

}