import { Before, After } from '@cucumber/cucumber';
import { CustomWorld } from './world';
import fs from 'fs';

After({ timeout: 20000 }, async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === 'FAILED' && this.page) {
    const screenshotPath = `reports/screenshots/${scenario.pickle.name.replace(/[^a-z0-9]/gi, '_')}.png`;
    await this.page.screenshot({ path: screenshotPath, fullPage: true });
    this.attach(fs.readFileSync(screenshotPath), 'image/png'); // Attach to Cucumber report
  }

  // Save video if recorded
  if (this.page?.video()) {
    const videoPath = await this.page.video()?.path();
    if (videoPath) {
      const destination = `reports/videos/${scenario.pickle.name.replace(/[^a-z0-9]/gi, '_')}.webm`;
      fs.mkdirSync('reports/videos', { recursive: true });
      fs.renameSync(videoPath, destination);
    }
  }

  // Close browser
  await this.closeBrowser();
});

Before({ timeout: 20000 }, async function (this: CustomWorld) {
  await this.openBrowser();
});
