# Playwright testy – e-shop SauceDemo

[![Playwright Tests](https://github.com/denisa-bujalkova/playwright-saucedemo/actions/workflows/playwright.yml/badge.svg)](https://github.com/denisa-bujalkova/playwright-saucedemo/actions/workflows/playwright.yml)

Automatický E2E test pro přihlášení do e-shopu [SauceDemo](https://www.saucedemo.com/), přidání produktu do košíku a přechod k pokladně. Test běží ve třech prohlížečích (Chromium, Firefox, WebKit) a automaticky se spouští v GitHub Actions při každé změně kódu.

**Cíl projektu:**
- Naučit se základy automatizovaného testování v Playwright.
- Vytvořit automatizovaný E2E test pro kritický scénář aplikace.
- Ověřit základní funkčnost aplikace bez nutnosti manuálního zásahu.

**Použité technologie:**
- Playwright
- TypeScript
- Node.js
- Visual Studio Code
- GitHub Actions
  
**Testovací scénář:**
1. Otevření přihlašovací stránky.
2. Přihlášení uživatele *standard_user*.
3. Přidání produktu do košíku na webu.
4. Ověření, že byl produkt úspěšně přidán do košíku.
6. Otevření košíku a kliknutí na checkout.

Projekt je součástí mého [QA portfolia](https://changeable-cattle-def.notion.site/QA-Portfolio-Denisa-Pat-csov-2f518e07e0848069904fdeb0f06d8261), kde najdete i manuální testovací scénáře a bug reporty.
