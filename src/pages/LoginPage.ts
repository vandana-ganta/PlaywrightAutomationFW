import {Page,Locator} from '@playwright/test'
import { BasePage } from "./BasePage.js";
export class LoginPage extends BasePage
{
    private readonly registerLink:Locator;
    private readonly username:Locator;
    private readonly password:Locator;
    private readonly loginbtn:Locator;
    //private readonly logo:Locator;
    constructor(page:Page)
    {
        super(page)
        this.loginbtn=page.locator("//button[text()='Login']").first()
        this.registerLink=page.locator("(//a[text()='Register'])[last()]")
        this.username=page.locator('#input-email')
        this.password=page.locator('#input-password')
    }
    async gotoLoginPage():Promise<void>
    {
        await this.page.goto("/en-gb?route=account/login",{waitUntil:'load'})
        await this.page.waitForTimeout(5000)
    }
    async verifyLoginPageTitle():Promise<string>
    {
        return await this.page.title();
        //expect(await this.page.title()).toHaveText("Account Login")
    }
    async doLogin(uname:string,pwd:string)
    {
        await this.username.fill(uname)
        await this.password.fill(pwd)
        await this.loginbtn.click()
        await this.page.waitForTimeout(9000)
    }
    async isRegisterLinkAvailable():Promise<boolean>
    {
        return await this.registerLink.isVisible()
    }
}