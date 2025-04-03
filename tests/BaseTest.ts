import { test as base, Page } from '@playwright/test'
import { PageManager } from '../POM/PageManager';

type Fixtures = {
    page: Page;
    pageManager: PageManager;
}

export const test = base.extend<Fixtures>({
    page: async ({browser}, use ) => {
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto('/')
        await use(page)
    },

    pageManager: async({page}, use) => use(new PageManager(page))
})