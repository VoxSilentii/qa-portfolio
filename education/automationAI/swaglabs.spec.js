// Подключаем Playwright
const { test, expect } = require('@playwright/test');

// Название нашего теста
test('E2E: Успешный логин и добавление товара в корзину', async ({ page }) => {
  // 1. Открываем сайт SwagLabs
  await page.goto('https://www.saucedemo.com/');
await page.waitForTimeout(2000);
  // 2. Вводим логин
  await page.locator('[data-test="username"]').fill('standard_user');
  
  // 3. Вводим пароль
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // 4. Нажимаем кнопку "Login"
  await page.locator('[data-test="login-button"]').click();

  // 5. Проверяем, что мы успешно залогинились (видим заголовок "Products")
  await expect(page.locator('.title')).toHaveText('Products');

  // 6. Находим первый товар (рюкзак) и нажимаем кнопку "Add to cart"
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // 7. Проверяем, что счетчик корзины (в правом верхнем углу) изменился на "1"
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // 8. Переходим в корзину
  await page.locator('.shopping_cart_link').click();

  // 9. Проверяем, что в корзине лежит именно этот товар
  await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
  await page.waitForTimeout(5000);
});