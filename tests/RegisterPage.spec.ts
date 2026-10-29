//import {RegisterPage} from '../src/pages/RegisterPage.js'
//import { register } from 'module';
import {ExcelHelper} from '../src/utils/excelUtils.js'
import {test,expect} from '../src/fixtures/pageFixtures.js'
import {CSVHelper} from '../src/utils/csvUtils.js'
test.beforeEach(async({registerPage})=>
{
    await registerPage.goToRegisterPage();
})
test("Verify Register Page Title",async({registerPage})=>
{
    
    const title:string=await registerPage.getTitleRegisterPage();
    expect(title).toBe("Register Account");
    //await registerPage.fillRegForm();
})

// let testData:any[]=CSVHelper.readCSV("src/testData/registerData.csv")
// for(let data of testData)
// {
//     test(`Registering with ${data.fname} ${data.lname} using csv file`,async({registerPage})=>
//     {
//         await registerPage.fillRegForm(data.fname,data.lname,data.email,data.pwd,data.phone)
//     })
// }

let testDataExcel:any[]=ExcelHelper.readExcel("src/testData/regData.xlsx")
for(let data of testDataExcel)
{
    test(`Registering with ${data.fname} ${data.lname} using excel file`,async({registerPage})=>
    {
        await registerPage.fillRegForm(data.fname,data.lname,data.email,data.pwd,data.phone)
    })
}
