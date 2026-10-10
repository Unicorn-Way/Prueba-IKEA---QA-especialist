
import { test, expect } from '@playwright/test';

test('inicio de sesión exitoso en IKEA', async ({ page }) => {

  await page.goto('https://www.ikea.com.do/es');

  await page.getByText('Inicia sesión o Regístrate', {
    exact: true,
  }).click();

  await expect(page).toHaveURL(/client|login/i);

  await page.getByRole('textbox', {
    name: /correo electrónico|email/i,
  }).fill('qaikea01@gmail.com');

   await page.getByRole('textbox', {
    name: /Contraseña/i,
  }).fill('Ikea123456');

  await page.getByRole('button', {
    name: /iniciar sesión|continuar|acceder/i,
  }).click();

  await expect(page).toHaveURL(/es\/client|es\/account/i);

});
