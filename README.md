# Playwright sentence-structure tests

What I added
- `tests/Positive-tests.spec.js` — 24 positive sentence-structure tests (data-driven)
- `tests/negative-tests.spec.js` — 10 negative sentence-structure tests
- `tests/ui-test.spec.js` — 1 UI test that fills a small inline form and asserts a success message

How to run (PowerShell)

Install dependencies if you haven't already:

```powershell
npm install
npx playwright install --if-needed
```

Run the tests:

```powershell
npx playwright test
```

Notes
- The sentence examples were inferred from typical assignment sentence-structure patterns (user chose to proceed without uploading the PDF). I created new sentences that follow those structures rather than copying any PDF examples.
- If you upload `Assignment 1.pdf` later I can refine test sentences to match its exact patterns and replace any inferred cases.
