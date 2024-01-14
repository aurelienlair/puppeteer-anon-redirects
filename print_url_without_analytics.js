/*
 * brew install tor
 *
 * Usage:
 * $ > tor
 * $ > node print_url_without_analytics.js
 */

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

const url = "https://substack.com/redirect/ea5ab4d5-b56f-47c8-b8ab-206356b9beca?j=eyJ1IjoiMTJ3ajhlIn0.Lp_11oqu-sKQUwpVRkmaG1MfxPEkYwMrvBY5E1By7EI";

followRedirects(url);
