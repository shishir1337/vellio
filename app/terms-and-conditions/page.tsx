import fs from 'fs'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions | Vellio Properties',
  description: 'Read the terms and conditions for using Vellio Properties services and website.',
}

async function getTermsAndConditions() {
  const filePath = path.join(process.cwd(), 'terms-and-conditions.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')

  const result = await remark().use(html).process(fileContents)
  return result.toString()
}

export default async function TermsAndConditions() {
  const content = await getTermsAndConditions()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="font-bodoni text-4xl md:text-5xl font-bold mb-8 text-[#00447D]">Terms and Conditions</h1>
      <div 
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

