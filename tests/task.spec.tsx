import { test } from '@playwright/test';

test.describe('/task page', () => {
    test('should render without crashing', async ({ page }) => {
        await page.goto('http://localhost:5173/task');
        await page.screenshot({ path: `test-results/screenshots/screenshot-${Date.now()}.png` });
    });
});