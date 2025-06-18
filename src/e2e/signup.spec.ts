import { test, expect } from '@playwright/test';

test.describe('Signup Flow E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/signup');
  });

  test('renderiza os campos do formulário', async ({ page }) => {
    await expect(page.locator('input#name')).toBeVisible();
    await expect(page.locator('input#email')).toBeVisible();
    await expect(page.locator('input#password')).toBeVisible();
    await expect(page.getByRole('button', { name: /sign in/i })).toBeVisible();
  });

  test('valida campos obrigatórios', async ({ page }) => {
    await page.getByRole('button', { name: /sign in/i }).click();

    const alertsCount = await page.locator('[role="alert"]').count();
    expect(alertsCount).toBeGreaterThan(0);

    await expect(page).toHaveURL(/\/signup/);
  });

  test('faz cadastro com dados válidos', async ({ page }) => {
    await page.route('**/api/users', (route) =>
      route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify({
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
          role: 'customer',
          avatar: 'avatar-url',
        }),
      })
    );

    await page.fill('input#name', 'John Doe');
    await page.fill('input#email', 'john@example.com');
    await page.fill('input#password', 'secret123');

    await page.getByRole('button', { name: /sign in/i }).click();

    await page.waitForNavigation();
    await expect(page).toHaveURL('/');
  });

  test('mostra erro ao falhar cadastro', async ({ page }) => {
    await page.route('**/api/users', (route) =>
      route.fulfill({
        status: 400,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Erro no cadastro' }),
      })
    );

    await page.fill('input#name', 'John Doe');
    await page.fill('input#email', 'john@example.com');
    await page.fill('input#password', 'secret123');

    await page.getByRole('button', { name: /sign in/i }).click();

    await expect(page.locator('[role="alert"]')).toBeVisible();

    await expect(page).toHaveURL(/\/signup/);
  });
});
