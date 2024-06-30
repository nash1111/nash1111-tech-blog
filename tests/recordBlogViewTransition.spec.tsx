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
        await page.keyboard.press('ArrowDown');
        await page.waitForSelector('text=Back to BLOG');
        await page.getByText('Back to BLOG').click();
        await page.waitForLoadState('networkidle');
        await page.close();
        await page.video()?.saveAs(`test-results/videos/${testInfo.project.name}/blogPage.webm`);
        // webm->gif
    });
});