// @ts-check
import { test, expect } from '@playwright/test';

test.describe("Test run", async () => {
  test('To check the access to the Api documentation', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const apiLink = await page.getByRole('link', { name: 'API' });
    await apiLink.click();
    await expect(page).toHaveURL('https://playwright.dev/docs/api/class-playwright');
    await expect(page.getByRole('heading', { name: 'Playwright Library' })).toBeVisible();
  });

  test('To check the redirect to Community page', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Community' }).click();
    await expect(page).toHaveURL(/.*community/);
    const pageTitle = await page.getByRole('heading', { name: 'Welcome' });
    await expect(pageTitle).toBeVisible();
  });
  
  test('To check the redirect to GitHub from header', async ({ page, context }) => {
    await page.goto('https://playwright.dev/');
    const githubLink = page.locator('a.header-github-link');
    
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      githubLink.click(),
    ]);
    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL('https://github.com/microsoft/playwright');
  });
})


