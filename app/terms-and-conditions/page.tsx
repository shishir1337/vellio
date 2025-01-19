import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions | Vellio Properties Ltd',
  description: 'Read the terms and conditions for using Vellio Properties Ltd services and website.',
}

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="font-bodoni text-4xl md:text-5xl font-bold mb-8 text-[#00447D]">Terms and Conditions</h1>
      <div className="prose max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>Welcome to Vellio Properties Ltd. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.</p>
        
        <h2>Use of Our Website</h2>
        <p>You agree to use our website for lawful purposes only and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.</p>
        
        <h2>Intellectual Property</h2>
        <p>The content on this website, including but not limited to text, graphics, logos, and images, is the property of Vellio Properties and protected by copyright laws.</p>
        
        <h2>Limitation of Liability</h2>
        <p>Vellio Properties shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, or use of, the website.</p>
        
        <h2>Governing Law</h2>
        <p>These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom.</p>
        
        <h2>Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Your continued use of our website after changes are posted constitutes your acceptance of the modified terms.</p>
        
        <h2>Contact Us</h2>
        <p>If you have any questions about these Terms and Conditions, please contact us at legal@vellioproperties.com.</p>
      </div>
    </div>
  )
}
