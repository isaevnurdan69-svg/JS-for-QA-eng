const { test, expect } = require('@playwright/test');

test('поиск в Google', async ({ page }) => {
    await page.goto('https://google.com/');
    await page.fill('textarea[name="q"]', 'Playwright');
    await page.click('input[name="btnK"]');
    await expect(page).toHaveTitle(/Playwright/);
    await expect(page.locator('text=Playwright')).toBeVisible();
});
