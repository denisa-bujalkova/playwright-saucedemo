import { test, expect } from '@playwright/test';

test('Přihlášení, přidání do košíku a přechod k checkoutu', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // 1. Validace: Ověření, že se u ikony košíku objevila jednička
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // 2. Pokračování v procesu (přechod do košíku a checkout)
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  // 3. Finální validace: Ověření, že jsme na stránce s informacemi pro doručení
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
});
