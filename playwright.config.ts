import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/e2e',
  webServer: {
    command: 'yarn dev',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
});
