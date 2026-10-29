import { Page,Locator } from "@playwright/test";
import {BasePage} from "./BasePage.js"
export class SearchResultsPage extends BasePage
{
    private readonly header:Locator;
    private readonly noOfResults:Locator;
    //private readonly productLink:Locator;
    constructor(page:Page)
    {
        super(page);
        this.header=page.locator("//h1");
        this.noOfResults=page.locator('div.product-thumb')
    }
    async getSearchHeaderText():Promise<string>
    {
        return this.header.innerText();
    }
    async noOfResultforSearch():Promise<number>
    {
        return await this.noOfResults.count()
    }
    async clickOnSpecificProduct(product:string)
    {
        console.log('Clicking on Product : '+product)
        let productLink:Locator=this.page.locator(`//a[text()='${product}']`)
        await productLink.click()
    }
}