import { test } from '@playwright/test';

test.use({ video: 'on' });

test.describe('/task page', () => {
    test('should render without crashing', async ({ page }) => {
        await page.goto('http://localhost:5173/blog');
        await page.getByText('個人ブログをNextからRemixに移行しました').click();
        // TODO: avoid waitForTimeout
        await page.waitForTimeout(1000);
        await page.close();
        await page.video()?.saveAs(`test-results/videos/blogPage.webm`);
        // 職人芸でwebm->gifに変換
    });
});

