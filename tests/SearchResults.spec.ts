//import { SearchResultsPage } from 'src/pages/SearchResultsPage.js'
import { CSVHelper } from 'src/utils/csvUtils.js'
import {test,expect} from  '../src/fixtures/pageFixtures.js'
test.beforeEach(async({loginPage})=>
{
    await loginPage.gotoLoginPage()
    await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!)
})
// test("Get HeaderText After Search",async({homePage,searchResultsPage})=>
// {
//     await homePage.searchProduct("macbook")
//     let header:string=await searchResultsPage.getSearchHeaderText()
//     expect(header).toContain("macbook")
//     console.log(header);
// })
// test("Get no of results",async({homePage,searchResultsPage})=>
// {
//     await homePage.searchProduct("macbook")
//     console.log("Search results appeared are : "+searchResultsPage.noOfResultforSearch());
// })
// test("Click on Product",async({homePage,searchResultsPage})=>
// {
//     await homePage.searchProduct("macbook")
//     await searchResultsPage.clickOnSpecificProduct("MacBook Air");
// }) 
let testData=CSVHelper.readCSV("src//testData//searchResultData.csv")
for(let data of testData)
{
    test(`Test with searchkey-${data.searchKey},product-${data.ProductName},count-${data.Count}`,async({homePage,searchResultsPage})=>
    {
        await homePage.searchProduct(data.searchKey)
        let count=await searchResultsPage.noOfResultforSearch();
        expect(count).toEqual(Number(data.Count))
        if(data.ProductName!='')
        await searchResultsPage.clickOnSpecificProduct(data.ProductName);
        else
        console.log("No Results for search key")
    })
}