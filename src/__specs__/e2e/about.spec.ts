import { expect, test } from '@playwright/test';

test('has about heading', async ({ page }) => {
  await page.goto('/about');
  const title = await page.innerText('h1');
  expect(title).toBe(`About Page`);
});
