import {BasePage} from './BasePage.js';
import { Page,Locator } from '@playwright/test';
export class RegisterPage extends BasePage
{
    private readonly fname:Locator;
    private readonly TC_Checkbox:Locator;
    private readonly Continue_btn:Locator;
    constructor(page:Page)
    {
        super(page)
        this.fname=page.locator("#input-firstname")
        this.TC_Checkbox=page.getByRole('checkbox')
        this.Continue_btn=page.getByRole('button', { name: 'Continue' })
    }
    async goToRegisterPage():Promise<void>
    {
        await this.page.goto("https://opencart.nltechtrainings.com/en-gb?route=account/register",{waitUntil:'load'})
        await this.page.waitForTimeout(2000)
    }
    async getTitleRegisterPage():Promise<string>
    {
        return await this.page.title();
    }
    async fillRegForm(fname:string,lname:string,email:string,password:string,phone:string):Promise<void>
    {
        await this.fname.focus();
        await this.page.keyboard.type(fname,{delay:500});
        await this.page.keyboard.press("Tab")
        await this.page.keyboard.type(lname)
        await this.page.keyboard.press("Tab")
        await this.page.keyboard.type(email)
        await this.page.keyboard.press("Tab")
        await this.page.keyboard.type(phone)
        await this.page.keyboard.press("Tab")
        await this.page.keyboard.type(password)
        await this.page.keyboard.press("Tab")
        await this.page.keyboard.type(password)
        await this.TC_Checkbox.check()
        await this.Continue_btn.click()
        await this.page.waitForTimeout(2000)
    }
}