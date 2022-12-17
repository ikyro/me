import type { NextApiRequest, NextApiResponse } from 'next'
import { chromium } from 'playwright'

type Data = Buffer

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { url, w, h } = req.query

  if (!url || !w || !h) return res.status(400).end()

  const browser = await chromium.launch()
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
