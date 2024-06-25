import { test } from '@playwright/test';

test.describe('/task page', () => {
    test('take screen shot of task page', async ({ page }) => {
        await page.goto('http://localhost:5173/task');
        await page.screenshot({ path: `test-results/screenshots/task-page.png` });
    });
});

test.describe('/blog page', () => {
    test('take screen shot of blog page', async ({ page }) => {
        await page.goto('http://localhost:5173/blog');
        await page.screenshot({ path: `test-results/screenshots/blog-page.png` });
        await page.setViewportSize({ width: 375, height: 667 }); // iPhone 6/7/8 dimensions
        await page.screenshot({ path: `test-results/screenshots/blog-page-iphone.png` });
    });
});