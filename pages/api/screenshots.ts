import type { NextApiRequest, NextApiResponse } from 'next'
import { chromium, LaunchOptions } from 'playwright'
import chrome from 'chrome-aws-lambda'

type Data = Buffer
type Options = LaunchOptions | false

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { url, w, h } = req.query

  if (!url || !w || !h) return res.status(400).end()

  const options: Options = process.env.NODE_ENV === 'production' && {
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless,
  }

  const browser = await chromium.launch(options || undefined)
  const page = await browser.newPage({
    colorScheme: 'dark',
  })

  await page.setViewportSize({ width: Number(w), height: Number(h) })
  await page.goto(url as string, {
    waitUntil: 'networkidle',
  })

  const buffer = await page.screenshot({
    type: 'jpeg',
    fullPage: true,
  })

  await browser.close()

  res.setHeader('Content-Type', 'image/jpeg')
  res.send(buffer)
}
