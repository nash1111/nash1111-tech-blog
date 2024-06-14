import { test } from '@playwright/test';

test.use({
    video: {
        mode: 'on',
        saveOnFailure: false // デフォルトのビデオ保存を無効にする
    }
});
test.describe('/task page', () => {
    test('should render without crashing', async ({ page }) => {
        await page.goto('http://localhost:5173/blog');
        await page.getByText('個人ブログをNextからRemixに移行しました').click();
        // TODO: avoid waitForTimeout
        await page.waitForTimeout(1000);
        await page.close();
        await page.video()?.saveAs(`test-results/videos/blogPage.webm`);
        // webm->gif
    });
});

