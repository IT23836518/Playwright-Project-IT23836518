import { test, expect } from "@playwright/test";

test("Convert basic need expression", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("mata aeDHum oonii");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=මට ඇඳුම්");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("Convert directional statement", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("malithi panthi yanavaa");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=මලිති පන්ති යනවා");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("Convert compound sentence expressing reason", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("oyaa hari, ehenam api sellam karanna yamu");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=ඔයා හරි, එහෙනම් අපි සෙල්ලම් කරන්න යමු");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("Convert complex sentence with conditional weather reference", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("vaessa unath api paatiyata yanna epaeyi");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=වැස්ස උනත් අපි පාටියට යන්න එපැයි");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("Convert general inquiry question", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("eyaa hariyata paadam karanavaadha?");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=එයා හරියට පාඩම් කරනවාද?");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("Convert command to provide information", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("naQQgita kiyanna");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=නංගිට කියන්න");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});


test("Convert positive future intention", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("api labana sathiyee yanavaa");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=අපි ලබන සතියේ යනවා");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});


test("Convert negative refusal statement", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("api iilaga maasee ennee naehae");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=අපි ඊලග මාසේ එන්නේ නැහැ");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("Convert positive response agreement", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("hari, api natannam");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=හරි, අපි නටන්නම්");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("Convert brief confirmation response", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("ov, aeththatama eeka hari");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=ඔව්, ඇත්තටම ඒක හරි");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("Convert casual informal request", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("ee, potha dhiyan");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=ඒ, පොත දියන්");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("Convert common feeling expression", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("nethmita badagini");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=නෙත්මිට බඩගිනි");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("Convert emotional state expression", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("mata eyaa gaena baya hithenavaa");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=මට එයා ගැන බය හිතෙනවා");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("Convert common want phrase", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("tikak inna mama enavaa");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=ටිකක් ඉන්න මම එනවා");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("Convert action combination phrase", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("oyaa gihin enna");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=ඔයා ගිහින් එන්න");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("Convert repeated word for gradual emphasis", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("vaeda vaeda");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=වැඩ වැඩ");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("Convert present ongoing action", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("mama dhaen paela vagaa karanavaa");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=මම දැන් පැල වගා කරනවා");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});


test("Convert recent past action", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("api giya iridhaa naetum panthi giyaa");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=අපි ගිය ඉරිදා නැටුම්  පන්ති ගියා");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("Convert third person singular statement", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("eyaa nuvara giyaa");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=එයා නුවර ගියා");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("Convert second person plural question", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("oyaalaa heta apee gedhara enavadha?");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=ඔයාලා හෙට අපේ ගෙදර එනවද?");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});


test("Convert negation of ability", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("mata badhullee yanna baee");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=මට බදුල්ලේ යන්න බෑ");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("Convert positive affirmation statement", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("sachini ehema karanavaa");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text=සචිනි එහෙම කරනවා");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

test("Convert urgent command with immediacy", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("oyaa issarahata yanna");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text= ඔයා ඉස්සරහට යන්න");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});


test("Convert repeated word for speed emphasis", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Correct selector for input
  const inputBox = page.getByPlaceholder("Input Your Singlish Text Here.");
  await inputBox.fill("api ikmanata ikmanata yamu");

  // Wait for translation output (partial text match)
  const outputText = page.locator("text= අපි ඉක්මනට ඉක්මනට යමු");
  await expect(outputText).toBeVisible({ timeout: 15000 });
});

