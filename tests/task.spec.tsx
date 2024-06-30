import { test } from '@playwright/test';

test.describe('/task page', () => {
    test('take screen shot of task page', async ({ page }, testInfo) => {
        await page.goto('http://localhost:5173/task');
        await page.screenshot({ path: `test-results/screenshots/task-page-${testInfo.project.name}.png` });
    });
});

test.describe('/blog page', () => {
    test('take screen shot of blog page', async ({ page }, testInfo) => {
        await page.goto('http://localhost:5173/blog');
        await page.screenshot({ path: `test-results/screenshots/blog-page-${testInfo.project.name}.png` });
    });
});