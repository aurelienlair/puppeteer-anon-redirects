const { exec } = require("child_process");
const puppeteer = require("puppeteer");

async function followRedirects(url) {
  const browser = await puppeteer.launch({
    headless: "new",
  });

  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "domcontentloaded" });

  const finalUrl = page.url();

  const urlObject = new URL(finalUrl);
  urlObject.search = "";
  const urlWithoutParams = urlObject.toString();

  console.log("Final URL without query string:", urlWithoutParams);

  await browser.close();

  return urlWithoutParams;
}

(async () => {
  const initialUrl =
    "https://www.example.com";

  const finalUrl = await followRedirects(initialUrl);

  exec(
    `/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --incognito "${finalUrl}"`,
    (err) => {
      if (err) {
        console.error("Failed to open URL in incognito mode:", err);
      } else {
        console.log(`URL opened in Chrome incognito mode: ${finalUrl}`);
      }
    }
  );
})();
