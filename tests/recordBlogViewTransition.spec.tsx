import { test } from '@playwright/test';

test.use({
    video: {
        mode: 'on',
    }
});
test.describe('/task page', () => {
    test('should render without crashing', async ({ page }, testInfo) => {
        await page.goto('http://localhost:5173/blog');
        await page.waitForSelector('text=個人ブログをNextからRemixに移行しました');
        await page.getByText('個人ブログをNextからRemixに移行しました').click();
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(2000);
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(2000);
        await page.waitForSelector('button:has-text("Back to BLOG")');
        await page.locator('button:has-text("Back to BLOG")').click();
        await page.waitForTimeout(2000);
        await page.waitForLoadState('networkidle');
        await page.close();
        await page.video()?.saveAs(`test-results/videos/${testInfo.project.name}/blogPage.webm`);
        // webm->gif
    });
});