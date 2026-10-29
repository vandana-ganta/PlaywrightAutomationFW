import {test as apitest} from '@playwright/test'
import { APIHelper } from '../api/APIHelper.js'
import process from 'node:process';
type apiFixtures=
{
    apiHelper:APIHelper;
}
export let test=apitest.extend<apiFixtures>({
    apiHelper:async({request},use)=>
    {
        let apiHelper=new APIHelper(request,process.env.API_BASEURL!)
        await use(apiHelper)
    }
})
export {expect} from '@playwright/test'
