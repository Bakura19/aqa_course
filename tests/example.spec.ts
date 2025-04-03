import { expect } from "@playwright/test";
import { test } from "./BaseTest";

test.describe('Check redirects per links of Playwright', async() => {
  test('Check redirect per Docs link', async({ pageManager }) => {
    await pageManager.navigationMenu.Buttons.Docs.click();
    await expect(pageManager.page).toHaveURL('https://playwright.dev/docs/intro');
  });

  test('Check redirect per API link', async({ pageManager }) => {
    await pageManager.navigationMenu.Buttons.API.click();
    await expect(pageManager.page).toHaveURL('https://playwright.dev/docs/api/class-playwright');
  });

  test('Check redirect per Community link', async({ pageManager }) => {
    await pageManager.navigationMenu.Buttons.Community.click();
    await expect(pageManager.page).toHaveURL('https://playwright.dev/community/welcome');
  });

  test('Check redirect per Playwright link to home page', async({ pageManager }) => {
    await pageManager.navigationMenu.Buttons.API.click();
    await expect(pageManager.page).toHaveURL('https://playwright.dev/community/welcome');
    await pageManager.navigationMenu.Buttons.Playwright.click();
    await expect(pageManager.page).toHaveURL('https://playwright.dev');
  });

  test('Check displaying of SearchModal', async({ pageManager }) => {
    await pageManager.navigationMenu.InputFields.Search.click();
    await expect(pageManager.searchModal.InputFields.SearchDocs).toBeVisible();
  });

  test('', async({ pageManager }) => {
    await pageManager.navigationMenu.InputFields.Search.click();
    await pageManager.searchModal.InputFields.SearchDocs.fill('dblclick')
    await expect(pageManager.searchModal.InputFields.SearchDocs).toHaveValue('dblclick');
  });
}) 
