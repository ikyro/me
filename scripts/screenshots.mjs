// @ts-check
import { chromium } from 'playwright'
import { REPOS } from './repos.mjs'

const width = 375
const height = 667

const browser = await chromium.launch()

Promise.all(
  Object.entries(REPOS).map(async ([key, url]) => {
    const page = await browser.newPage()

    console.log(`working on ${url} -> width: ${width}, height: ${height}`)

    await page.setViewportSize({ width, height })

    await page.goto(url, { waitUntil: 'networkidle' })
    await page.screenshot({
      fullPage: true,
      path: `./public/assets/${key}.png`,
    })
  })
)
  .then(() => browser.close())
  .catch(() => browser.close())
