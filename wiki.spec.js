const { test, expect } = require('@playwright/test');
const WikipediaPage = require('./WikipediaPage');

test('поиск через POM', async ({ page }) => {
    const wiki = new WikipediaPage(page);
    
    await wiki.open();
    await wiki.search('Playwright');

    await expect(page).toHaveTitle(/Playwright/);
    await expect(page.locator('text=Playwright').first()).toBeVisible();
});