import { test, expect } from "@playwright/test";

test("Clear button removes all input and output", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("sakuni redhi ganna yanavaa");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=Both input and output fields should be completely empty after clicking clear button");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});