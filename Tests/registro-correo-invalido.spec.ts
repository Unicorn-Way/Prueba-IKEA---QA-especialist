import { test, expect } from '@playwright/test';

test('muestra un error al registrar un correo inválido', async ({ page }) => {

  await page.goto('https://www.ikea.com.do/');

  await page.getByText('Inicia sesión o Regístrate', {
    exact: true,
  }).click();

  await expect(page).toHaveURL(/client|login/i);

  const emailInput = page.getByRole('textbox', {
    name: /correo electrónico|email/i,
  });

  await expect(emailInput).toBeVisible();

  await emailInput.fill('usuario@correo');

  await page.getByRole('button', {
  name: 'Iniciar sesión',
  exact: true,
}).click();
  
  const errorMessage = page.locator('#email_loginForm-helper');

  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toHaveText('Correo electrónico no válido');

});
