const { test, expect } = require('@playwright/test');
const GooglePage = require('./GooglePage');

test('поиск через POM', async ({ page }) => {
    const google = new GooglePage(page);

    await google.open();
    await google.search('Playwright');

    await expect(page).toHaveTitle(/Playwright/);
    await expect(page.locator('text=Playwright')).toBeVisible();
});