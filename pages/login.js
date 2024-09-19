 exports.loginpage=class loginpage{
    constructor(page){

    this.page=page
    this.username_textbox=page.locator( '//input[@name="username"]')
    this.password_textbox= page.locator('//input[@name="password"] ')
    this.login_button=page.locator('//button[text()= " Login "]')

}

async goToLoginPage(){
    await this.page.goto(process.env.OrangeHRM_URL)
}


async login(username,password){
    await this.username_textbox.fill(username)
    await this.password_textbox.fill(password)
    await this.login_button.click()
}
}