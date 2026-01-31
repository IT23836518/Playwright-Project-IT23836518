import { test, expect } from "@playwright/test";

test("Missing vowel causes incorrect conversion", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("malki pnsal yanavaa");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=මල්කි පන්සල් යනවා");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("Extra consonant creates wrong word", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("ayiyaa krikat sellam karannnavaa");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=අයියා ක්‍රිකට් සෙල්ලම් කරනවා");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("Leading whitespace preservation", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("  maamaa labana sathiyee enavaa");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=මාමා ලබන සතියේ එනවා");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("Trailing whitespace preservation", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("apee pavulee aya haemooma siiGIriyee yanavaa    ");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=අපේ පවුලේ අය හැමෝම සීඟිරියේ යනවා ");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("HTML tags in input text", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("<b>lakShaani </b>heta iskoolee yanavaa kivvaa");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=ලක්ෂානි  හෙට ඉස්කෝලේ යනවා කිව්වා");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("Tab character between words", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("kaviDHUpereedhaaratagiyaa");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=කවිඳු පෙරේදා රට ගියා");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("Vowel substitution creates invalid word", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("mamu aluth koos ekak patan gaththaa");

  // Wait for translation output (partial text match)
  const outputText = page.locator("මම අලුත් කෝස් එකක් පටන් ගත්තා");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("Numbers joined to text without spacing", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("akkaa8.00AMgedharaenavaakivvaa");

  // Wait for translation output (partial text match)
  const outputText = page.locator("අක්කා 8.00AM ගෙදර එනවා කිව්වා");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("Sinhala Unicode characters in Singlish input", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("ammaa  බැංකුවට  giyaa");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=අම්මා බැංකුවට ගියා");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("Entire input in capital letters", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("AKKAA PANSAL ENAVAA KIVVAA");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=අක්කා පන්සල් එනවා කිව්වා");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

