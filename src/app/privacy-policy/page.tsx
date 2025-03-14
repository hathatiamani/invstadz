import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>

            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">Last Updated: March 12, 2025</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p className="mb-4">
                At Invsta, we respect your privacy and are committed to protecting your personal data. This
                Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our
                platform.
              </p>
              <p className="mb-4">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
                please do not access the platform.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
              <p className="mb-4">We collect information that you provide directly to us when you:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Register for an account</li>
                <li>Complete your profile</li>
                <li>Submit information about your startup or investment interests</li>
                <li>Communicate with other users</li>
                <li>Contact our support team</li>
                <li>Respond to surveys or questionnaires</li>
              </ul>
              <p className="mb-4">
                This information may include your name, email address, phone number, company information, professional
                background, investment preferences, and any other information you choose to provide.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide, maintain, and improve our platform</li>
                <li>Connect startups with potential investors</li>
                <li>Process transactions and send related information</li>
                <li>Send administrative messages, updates, and security alerts</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Provide customer service</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="mb-4">We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  With other users as part of the core functionality of the platform (e.g., connecting startups with
                  investors)
                </li>
                <li>With service providers who perform services on our behalf</li>
                <li>In response to a legal request if we believe disclosure is required by law</li>
                <li>To protect the rights, property, and safety of Invsta, our users, and the public</li>
                <li>
                  In connection with, or during negotiations of, any merger, sale of company assets, financing, or
                  acquisition
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect the security of your personal
                information. However, please be aware that no method of transmission over the internet or electronic
                storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>The right to access your personal information</li>
                <li>The right to rectify inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p className="mb-4">
                To exercise these rights, please contact us using the information provided in the Contact Us section.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to track activity on our platform and hold certain
                information. Cookies are files with a small amount of data that may include an anonymous unique
                identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                sent.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Childrens Privacy</h2>
              <p className="mb-4">
                Our platform is not intended for children under the age of 18. We do not knowingly collect personal
                information from children under 18. If you are a parent or guardian and believe your child has provided
                us with personal information, please contact us.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the Last Updated date. You are advised to review this Privacy
                Policy periodically for any changes.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us at contact@invsta.vercel.app
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

