import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookies Policy | Vellio Properties Ltd',
  description: 'Learn about how Vellio Properties Ltd uses cookies on our website.',
}

export default function CookiesPolicy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="font-bodoni text-4xl md:text-5xl font-bold mb-8 text-[#00447D]">Cookies Policy</h1>
      <div className="prose max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>This Cookies Policy explains how Vellio Properties Ltd uses cookies and similar technologies to recognize you when you visit our website.</p>
        
        <h2>What are cookies?</h2>
        <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
        
        <h2>How we use cookies</h2>
        <p>We use cookies for the following purposes:</p>
        <ul>
          <li>To enable certain functions of the website</li>
          <li>To provide analytics</li>
          <li>To store your preferences</li>
        </ul>
        
        <h2>Types of cookies we use</h2>
        <p>We use both session and persistent cookies on our website. Session cookies are temporary and are deleted when you close your browser. Persistent cookies remain on your device for a set period or until you delete them manually.</p>
        
        <h2>How to control cookies</h2>
        <p>You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.</p>
        
        <h2>Changes to this policy</h2>
        <p>We may update our Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page.</p>
        
        <h2>Contact Us</h2>
        <p>If you have any questions about our Cookies Policy, please contact us at privacy@vellioproperties.com.</p>
      </div>
    </div>
  )
}
