import {Page,Locator} from '@playwright/test'
import { BasePage } from "./BasePage.js";
export class HomePage extends BasePage
{
    protected readonly headers:Locator;
    protected readonly logoutLink:Locator;
    private readonly username:Locator;
    private readonly password:Locator;
    private readonly loginbtn:Locator;
    private readonly searchBar:Locator;
    private readonly searchButton:Locator;
    constructor(page:Page)
    {
        super(page)
        this.headers=page.locator("//h2")
        this.logoutLink=page.locator("(//a[text()='Logout'])[last()]")
        this.loginbtn=page.locator("//button[text()='Login']").first()
        this.username=page.locator('#input-email')
        this.password=page.locator('#input-password')
        this.searchBar=page.getByPlaceholder("Search")
        this.searchButton=page.locator("//button[@type='submit']")
    }
    async verifyheaderTexts():Promise<string[]>
    {
        let headerTexts:string[]= await this.headers.allInnerTexts()
        return headerTexts
       
    }
    async verifyHomePageTitle():Promise<string>
    {
        return await this.page.title();
    }
    async doLogin(uname:string,pwd:string)
    {
        await this.username.fill(uname)
        await this.password.fill(pwd)
        await this.loginbtn.click()
    }
    async isLogoutLinkAvailable():Promise<boolean>
    {
        return await this.logoutLink.isVisible()
    }
    async searchProduct(productname:string):Promise<void>
    {
        console.log(`Searching for the product : ${productname}`)
        await this.searchBar.fill(productname);
        await this.searchButton.click();
    }
}
