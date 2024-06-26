import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "Mobile Safari",
      use: {
        ...devices["iPhone 13"],
      },
    },
    {
      name: "Dark Desktop",
      use: {
        ...devices["Desktop Chrome"],
        colorScheme: "dark",
      },
    },
  ],
});
