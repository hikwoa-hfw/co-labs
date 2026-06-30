import React from "react";
import { cormorant, montserrat } from "../font";

export const metadata = {
  title: "Terms of Service | Co-Labs Space",
  description: "Terms of Service and usage policies for Co-Labs.",
};

export default function TermsOfService() {
  return (
    <div className={`min-h-screen py-24 px-8 md:px-16 max-w-4xl mx-auto ${montserrat.className}`}>
      <div className="space-y-12">
        <header className="space-y-4">
          <h1 className={`${cormorant.className} text-4xl md:text-6xl font-bold`}>
            Terms of Service
          </h1>
          <p className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <section className="space-y-6">
          <h2 className={`${cormorant.className} text-2xl md:text-3xl font-semibold`}>1. Acceptance of Terms</h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            By accessing or using the Co-Labs services, including our coworking spaces, websites, and applications (collectively, the "Services"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Services.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className={`${cormorant.className} text-2xl md:text-3xl font-semibold`}>2. Use of Services</h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            You agree to use our Services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of the Services does not violate any applicable laws or regulations.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>You must maintain the confidentiality of your account information.</li>
            <li>You agree not to disrupt or interfere with the security or operation of the Services.</li>
            <li>You will respect other members and staff within the coworking spaces.</li>
            <li>You will not use the Services for any illegal or unauthorized purpose.</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className={`${cormorant.className} text-2xl md:text-3xl font-semibold`}>3. Membership and Payments</h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            Certain features of the Services may require a paid membership. By subscribing to a membership, you agree to pay the fees associated with that membership. Fees are non-refundable unless otherwise stated. We reserve the right to change our fees upon reasonable notice.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className={`${cormorant.className} text-2xl md:text-3xl font-semibold`}>4. Limitation of Liability</h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            To the maximum extent permitted by law, Co-Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
          </p>
        </section>
        
        <section className="space-y-6">
          <h2 className={`${cormorant.className} text-2xl md:text-3xl font-semibold`}>5. Contact Information</h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            For any questions or concerns regarding these Terms, please reach out to us at: legal@co-labs.com
          </p>
        </section>
      </div>
    </div>
  );
}
