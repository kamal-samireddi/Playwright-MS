const { test, expect } = require('@playwright/test');

test.describe('Search - Basic Functionality', () => {
  test('example test @smoke @sanity @regression', async ({ page }) => {
    await page.goto('https://www.marksandspencer.com');
    await expect(page).toHaveTitle(/Marks & Spencer/);
  });
});
