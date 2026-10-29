import { Page,Locator } from "@playwright/test";
import {BasePage} from "./BasePage.js"
export class ProductInfoPage extends BasePage
{
    private readonly header:Locator;
    private readonly metadata:Locator;
    private readonly price:Locator;
    private readonly imagesCount:Locator;
    private readonly map:Map<string,string>;
    constructor(page:Page)
    {
        super(page)
        this.header=this.page.locator("h1")
        this.metadata=this.page.locator("(//div[@class='col-sm']//ul[@class='list-unstyled'])[1]//li")
        this.price=this.page.locator("(//div[@class='col-sm']//ul[@class='list-unstyled'])[2]//h2//span")
        this.imagesCount=this.page.locator("//div[@class='image magnific-popup']//img")
        this.map=new Map<string,string>()
    }
    async getHeader():Promise<string | null>
    {
        return await this.header.textContent()
    }
    async getProductImagesCount():Promise<number>
    {
        await this.imagesCount.first().waitFor({state:'visible'})
        return await this.imagesCount.count()
    }
    async getProductMetadata():Promise<void>//Map<string,string>
    {
        await this.metadata.first().waitFor({state:'visible'})
        let metaDataArray:string[]=await this.metadata.allInnerTexts()
        for(let data of metaDataArray)
        {
            let individualRecord:string[]=data.split(":")
            this.map.set(individualRecord[0].trim(),individualRecord[1].trim())
        }
       // return this.map;
    }
    async getPrice():Promise<void>
    {
        let price=await this.price.innerText()
        this.map.set("Product Price",price)
    }
    async getCompleteProductInfo():Promise<Map<string,string>>
    {
        // await this.getProductMetadata();
        // await this.getPrice();
        return this.map;
    }
}