import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>

            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">Last Updated: March 12, 2025</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p className="mb-4">
                Welcome to Invsta, a platform that connect startups in Algeria with investors interested in funding them. These Terms of Service govern your use of our platform, including any
                features, functionalities, applications, content, and services offered on or through our website.
              </p>
              <p className="mb-4">
                By accessing or using Invsta, you agree to be bound by these Terms. If you do not agree to these
                Terms, please do not access or use our platform.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Platform Role & Limitations</h2>
              <p className="mb-4">
                <strong>Invsta is not a financial intermediary</strong>and does not handle investment transactions or funds.
              </p>
              <p className="mb-4">
              The platform facilitates connections but does not guarantee investment success.
              </p>
              <p className="mb-4">
              Users are responsible for conducting due diligence before engaging in any investment discussions.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Account Registration</h2>
              <p className="mb-4">
                To access certain features of the Platform, you may be required to register for an account. You agree to
                provide accurate, current, and complete information during the registration process and to update such
                information to keep it accurate, current, and complete.
              </p>
              <p className="mb-4">
                You are responsible for safeguarding your account credentials and for all activities that occur under
                your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Platform Rules and Conduct</h2>
              <p className="mb-4">
                You agree not to use the Platform for any purpose that is unlawful or prohibited by these Terms. You may
                not use the Platform in any manner that could damage, disable, overburden, or impair the Platform or
                interfere with any other partys use of the Platform.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. User Eligibility</h2>
              <p className="mb-4">
              Users must be at least 18 years old and legally capable of entering into contracts.

              Investors and startups must provide accurate and truthful information.
              Users agree not to:

Provide false or misleading information.

Use the platform for fraudulent or illegal activities.

Attempt to circumvent Invsta’s security measures.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6.Disclaimers & Limitation of Liability</h2>
              <p className="mb-4">
              Invsta does not provide financial, legal, or investment advice.

The platform is not liable for any losses resulting from investor-startup interactions.

Users assume all risks related to investment discussions.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Termination & Suspension</h2>
              <p className="mb-4">
              Invsta reserves the right to suspend or terminate accounts for violations of these terms.

Users can delete their accounts at any time.
              </p>

              

              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
                provide at least 30 days notice prior to any new terms taking effect. What constitutes a material
                change will be determined at our sole discretion.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about these Terms, please contact us at invstadz@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

