import {Page,Locator} from '@playwright/test'
export class BasePage
{
    protected readonly page:Page;
    constructor(page:Page)
    {
        this.page=page;
    }
}