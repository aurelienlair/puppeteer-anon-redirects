const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const AnonymizeUA = require("puppeteer-extra-plugin-anonymize-ua")();
const { SocksProxyAgent } = require("socks-proxy-agent");
const exec = require("child_process").exec;

puppeteer.use(StealthPlugin());
puppeteer.use(AnonymizeUA);

async function followRedirects(url) {
  const proxyAgent = new SocksProxyAgent("socks5://127.0.0.1:9050");

  try {
    const browser = await puppeteer.launch({
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        `--proxy-server=socks5://127.0.0.1:9050`, // Tor proxy server
      ],
    });

    const page = await browser.newPage();

    console.log("\nNavigating to URL:", url);
    await page.goto(url, { waitUntil: "domcontentloaded" });

    const finalUrl = page.url();
    console.log("\nFinal URL after redirects:", finalUrl);

    const urlObject = new URL(finalUrl);
    urlObject.search = "";
    const urlWithoutParams = urlObject.toString();
    console.log("\nFinal URL without query string:", urlWithoutParams);

    await browser.close();

    return urlWithoutParams;
  } catch (err) {
    console.error("\nError during redirect following:", err);
    throw err;
  }
}

async function main() {
  const initialUrl =
    "https://www.example.com";

  try {
    const finalUrl = await followRedirects(initialUrl);

    console.log(`\nLaunching Chrome incognito mode with URL: ${finalUrl}`);

    const chromePath =
      "/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome"; // Verify the path
    const command = `${chromePath} --incognito "${finalUrl}"`;

    console.log(`\nCommand: ${command}`);

    exec(command, (err, stdout, stderr) => {
      if (err) {
        console.error("Failed to open URL in Chrome incognito mode:", err);
        console.error("stderr:", stderr);
      } else {
        console.log("stdout:", stdout);
        console.log(`\nURL opened in Chrome incognito mode: ${finalUrl}`);
      }
    });
  } catch (err) {
    console.error("Failed to get final URL:", err);
  }
}

main();
