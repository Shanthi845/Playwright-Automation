const { test, expect } = require('@playwright/test');
import { loginpage } from '../pages/login';
import { adminPage } from '../pages/Admin';
import { MyInfoPage } from '../pages/MyInfo';
import { logoutPage } from '../pages/logout';
import { buzzPage } from '../pages/Buzz';

const sampleData = require('../data/testData.json');
require('dotenv').config(); 

test.describe('OrangeHRM Automation', () => {
    let page;

    // Login
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        const Login = new loginpage(page);

        await Login.goToLoginPage();
        await Login.login(process.env.USER_NAME, process.env.PASSWORD);
        await expect(page).toHaveURL(process.env.Dashboard_URL);
    });

    // Admin test case
    test('Admin', async () => {
        const Admin = new adminPage(page);
        
        await Admin.goToAdminTab();
        await Admin.addUser(); 
    });


    // test('Buzz' , async () => {
    //     const Buzz = new buzzPage(page)
    //     await Buzz.goToBuzzTab()
        
    // })

    // My Info test case
    // test('My Info', async () => {
    //     const myInfoPage = new MyInfoPage(page);
    //     await myInfoPage.goToMyInfoTab();
    // });

    

    
    // test.afterAll('Logout',async () => {
    //     const Logout = new logoutPage(page);
    //     await Logout.logout();
    //     await page.close();
    // });
});
