# IKEA Automation

Pruebas automatizadas de la plataforma IKEA República Dominicana utilizando **Playwright** y **TypeScript**.

## Requisitos

- Node.js
- npm

## Instalación

```bash
git clone https://github.com/Unicorn-Way/Prueba-IKEA---QA-especialist.git
npm install
npx playwright install chromium
```

## Ejecución

Ejecutar las pruebas automatizadas:

```bash
npm run test:e2e 
```

## Pruebas implementadas

- **Validación de correo inválido:** verifica que IKEA rechace un correo con formato incorrecto y muestre el mensaje de validación esperado.
- **Inicio de sesión:** automatiza el flujo de inicio de sesión y verifica el resultado esperado mediante aserciones.

## Tecnologías

- Playwright
- TypeScript
- Node.js
