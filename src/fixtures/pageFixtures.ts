import {HomePage} from '../pages/HomePage.js'
import {LoginPage} from '../pages/LoginPage.js'
import {RegisterPage} from '../pages/RegisterPage.js'
import {SearchResultsPage} from '../pages/SearchResultsPage.js'
import {ProductInfoPage} from '../pages/ProductInfoPage.js'
import {test as vandanafixture} from '@playwright/test'

type pageFixtures=
{
    loginPage:LoginPage;
    homePage:HomePage;
    registerPage:RegisterPage;
    searchResultsPage:SearchResultsPage;
    productInfoPage:ProductInfoPage;
}
export let test=vandanafixture.extend<pageFixtures>({
    loginPage:async({page},use)=>
    {
        let loginPage=new LoginPage(page)
        await use(loginPage)
    },
    homePage:async({page},use)=>
    {
        let homePage=new HomePage(page)
        use(homePage)
    },
    registerPage:async({page},use)=>
    {
        let regPage=new RegisterPage(page);
        use(regPage);
    },
    searchResultsPage:async({page},use)=>
    {
        let searchResultsPage=new SearchResultsPage(page);
        use(searchResultsPage)
    },
    productInfoPage:async({page},use)=>
    {
        let productInfoPage=new ProductInfoPage(page);
        use(productInfoPage)
    }
})
export {expect} from '@playwright/test'

