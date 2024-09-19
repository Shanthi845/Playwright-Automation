// import { resolve } from 'path'; // Add this line

// const filePath = resolve('../assets/wallpaper.jpg')

exports.buzzPage= class buzzPage {

    constructor(page){
        this.page=page
        this.buzzTab=page.locator("//span[text()='Buzz']")
        this.sharePhotosButton=page.locator("//button[text()=' Share Photos']")
        this.addPhotos=page.locator("(//i[ contains(@class,'oxd-icon')])[6]")
        this.fileInput = page.waitForSelector('input[type="file"]')
        this.shareButton=page.locator("//button[text()=' Share ']")

    }
    async goToBuzzTab(){
        await this.buzzTab.click()
        await this.page.waitForTimeout(3000)
        await this.sharePhotosButton.click()
        await this.page.waitForTimeout(3000)
        await this.addPhotos.click()
        await this.page.waitForTimeout(3000)

        await this.fileInput.setInputFiles('../assets/wallpaper.jpg')
        await this.shareButton.click()

    }
}