import { CSVHelper } from 'src/utils/csvUtils.js'
import {test} from '../src/fixtures/pageFixtures.js'
test.beforeEach(async({loginPage})=>
{
    await loginPage.gotoLoginPage()
    await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!)
})
let testData=CSVHelper.readCSV("src//testData//searchResultData.csv")
for(let data of testData)
{
    test(`Product Metadata for ${data.ProductName}`,async({homePage,searchResultsPage,productInfoPage})=>
    {
        await homePage.searchProduct(data.searchKey);
        if(data.ProductName!='')
        {
            await searchResultsPage.clickOnSpecificProduct(data.ProductName);
            await productInfoPage.getProductMetadata();
            await productInfoPage.getPrice()
            console.log(await productInfoPage.getCompleteProductInfo())
        }
        else
        console.log("No Results for search key")
    })
}