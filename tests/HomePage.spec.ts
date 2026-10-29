
import {test,expect} from '../src/fixtures/pageFixtures.js'

test.beforeEach(async({loginPage})=>
{
    await loginPage.gotoLoginPage()
    await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!)

})
test("Verify Headers Home Page",async({homePage})=>
{
    let headerTexts:string[]=await homePage.verifyheaderTexts()
    expect(headerTexts).toEqual(["My Orders", "My Affiliate Account", "Newsletter"])
})
test("Verify Title Home Page",async({homePage})=>
{
    let title:string=await homePage.verifyHomePageTitle()
    expect(title).toBe("My Account")
})
test("Logout Link visible",async({homePage})=>
{
    let isLogoutPresent:boolean=await homePage.isLogoutLinkAvailable()
    expect.soft(isLogoutPresent).toBeTruthy()  
})