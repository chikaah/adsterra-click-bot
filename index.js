const puppeteer = require("puppeteer");

const URL = "https://glorious-forest-robot.glitch.me"; // replace with your Glitch URL

async function runBot() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();
  await page.goto(URL, { waitUntil: "networkidle2" });

  console.log("Page loaded. Clicking the button...");

  await page.click(".earn-button");

  await page.waitForTimeout(10000);

  console.log("Ad watched. Closing browser...");

  await browser.close();
}

setInterval(runBot, 5 * 60 * 1000);
runBot();