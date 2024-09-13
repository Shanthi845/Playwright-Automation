const { test, expect } = require('@playwright/test');
import{loginpage} from '../pages/login'
import{adminPage} from '../pages/Admin'
import { logoutPage } from '../pages/logout'
//import { request } from 'http';
const sampleData = require('../data/testData.json')
require('dotenv').config(); // Import and configure dotenv


test.describe('OrangeHRM Login', () => {

    // test.beforeAll(async ({ page }) => {
    //     const Login =new loginpage(page)
    // })
    test.beforeEach(async ({ page }) => {
        const Login =new loginpage(page)

        await Login.gotologinpage();
        await Login.login(process.env.USER_NAME,process.env.PASSWORD)
        await expect(page).toHaveURL(process.env.Dashboard_URL);
    })



// test('login', async ({ page }) => {
//     const Login =new loginpage(page)

//     await Login.gotologinpage()
//     await Login.login('Admin','admin123')
   
// })
test('Admin', async ({ page }) => {
    
    const Admin = new adminPage(page)
await Admin.admin()
})

test("logout",async({page}) => {

const Logout=new logoutPage(page)
await Logout.logout()

})
test.afterEach(async({page}) => {

// await page.close();    
    })
// test("Get request",async({request})=>{
//  let response =   await request.get(process.env.GET_URL)
//  expect(response.ok()).toBeTruthy()
//  let body = await response.json()
// console.log("Get response=>",body)
// expect(body.page).toBe(2)
// })


// test("post request",async({request})=>{
//     const response = await request.post(process.env.POST_URL,
//         { 
//             data:sampleData.postData,

// })
//  expect(response.ok()).toBeTruthy()
//  const body=await response.json()
//  console.log("Post response=>",body)
//  expect(body.name).toBe("morpheus")
// })


// test("Put request",async({request})=>{
//     const response = await request.put(process.env.PUT_URL,
//         {data:sampleData.putData,
// })
//    expect(response.ok()).toBeTruthy()
//    const body=await response.json()
//    console.log("Put response=>",body)
//    expect(body.name).toBe("morpheus updated")
// }
// )

// test("Patch request",async({request})=>{
//     const response = await request.patch(process.env.PATCH_URL,
//         {data:sampleData.patchData,
          
// })
// expect(response.ok()).toBeTruthy()
// const body=await response.json()
// console.log("Patch response=>",body)
// expect(body.job).toBe("Lion resident")

// }
// )

// test("Delete request",async({request})=>{
//     const response=await request.delete(process.env.DELETE_URL,)
    
// expect(response.status()).toBe(204)
// console.log("Delete response=>",response.status())

// }
// )

});