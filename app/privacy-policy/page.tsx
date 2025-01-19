import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Vellio Properties Ltd',
  description: 'Learn about how Vellio Properties Ltd collects, uses, and protects your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="font-bodoni text-4xl md:text-5xl font-bold mb-8 text-[#00447D]">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>At Vellio Properties Ltd, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our website or services.</p>
        
        <h2>Information We Collect</h2>
        <p>We may collect personal information such as your name, email address, phone number, and any other information you provide to us voluntarily through our website or when you contact us.</p>
        
        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to provide and improve our services, communicate with you, and comply with legal obligations. We do not sell your personal information to third parties.</p>
        
        <h2>Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
        
        <h2>Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information. If you have any questions or requests regarding your data, please contact us.</p>
        
        <h2>Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
        
        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at privacy@vellioproperties.com.</p>
      </div>
    </div>
  )
}
