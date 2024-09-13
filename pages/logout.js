exports.logoutPage=class logoutPage{
    constructor(page){
        this.page=page
        this.profile_image=page.locator('(//img[@alt="profile picture"])[1]')
        this.logoutButton=page.locator('//a[text()="Logout"]')
    }
    async logout(){
        await this.profile_image.click()
        await this.logoutButton.click()
    }

    }

