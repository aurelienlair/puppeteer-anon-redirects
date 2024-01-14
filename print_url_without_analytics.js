const puppeteer = require('puppeteer-extra');
const stealthPlugin = require('puppeteer-extra-plugin-stealth');
const anonymizeUAPlugin = require('puppeteer-extra-plugin-anonymize-ua');

puppeteer.use(stealthPlugin()).use(anonymizeUAPlugin());

async function followRedirects(url) {
  const browser = await puppeteer.launch({
    headless: 'new', // Address the deprecation warning
  });

  const page = await browser.newPage();

  // Navigate to the URL
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  // Get the final URL
  const finalUrl = page.url();

  // Remove query parameters from the URL
  const urlObject = new URL(finalUrl);
  urlObject.search = '';
  const urlWithoutParams = urlObject.toString();

  console.log('Final URL without query string:', urlWithoutParams);

  // Close the browser
  await browser.close();
}

const url = "https://example.com/path/to/page?utm_source=tracking&utm_medium=annoying&utm_campaign=spam&other_param=value";

followRedirects(url);
