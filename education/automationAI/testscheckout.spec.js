const { test, expect } = require('@playwright/test');

test('E2E: Полное оформление заказа', async ({ page }) => {
  // 1. Открываем сайт и логинимся
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');

  // 2. Добавляем два товара в корзину
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('2');

  // 3. Открываем корзину и проверяем, что оба товара на месте
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText([
    'Sauce Labs Backpack',
    'Sauce Labs Bike Light',
  ]);

  // 4. Нажимаем "Checkout"
  await page.locator('[data-test="checkout"]').click();
  await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Your Information');

  // 5. Заполняем данные покупателя
  await page.locator('[data-test="firstName"]').fill('Ivan');
  await page.locator('[data-test="lastName"]').fill('Petrov');
  await page.locator('[data-test="postalCode"]').fill('101000');
  await page.locator('[data-test="continue"]').click();

  // 6. Проверяем страницу подтверждения и итоговую сумму
  await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Overview');
  await expect(page.locator('[data-test="total-label"]')).toContainText('Total:');

  // 7. Подтверждаем заказ
  await page.locator('[data-test="finish"]').click();

  // 8. Проверяем, что заказ оформлен
  await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
});