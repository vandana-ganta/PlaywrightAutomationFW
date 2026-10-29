import {test,expect} from '../src/fixtures/pageFixtures.js'
test.beforeEach(async({loginPage})=>
    {
        await loginPage.gotoLoginPage()
    }
)
test("Register Link visible",async({loginPage})=>
{
    let isRegPresent:boolean=await loginPage.isRegisterLinkAvailable()
    expect.soft(isRegPresent).toBeTruthy()  
})
test("Verify Title",async({loginPage})=>
{
    let title:string=await loginPage.verifyLoginPageTitle()
    expect(title).toBe("Account Login")
})
test("Login with creds",async({loginPage})=>
{
    await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!)
    
})