const { test, expect } = require('@playwright/test');

test('открыть Google и проверить заголовок', async ({ page }) => {
    await page.goto('https://google.com');
    await expect(page).toHaveTitle('Google');
});