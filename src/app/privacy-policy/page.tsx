import React from "react";
import { cormorant, montserrat } from "../font";

export const metadata = {
  title: "Privacy Policy | Co-Labs Space",
  description: "Privacy Policy and data collection guidelines for Co-Labs.",
};

export default function PrivacyPolicy() {
  return (
    <div className={`min-h-screen py-24 px-8 md:px-16 max-w-4xl mx-auto ${montserrat.className}`}>
      <div className="space-y-12">
        <header className="space-y-4">
          <h1 className={`${cormorant.className} text-4xl md:text-6xl font-bold`}>
            Privacy Policy
          </h1>
          <p className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <section className="space-y-6">
          <h2 className={`${cormorant.className} text-2xl md:text-3xl font-semibold`}>1. Information We Collect</h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, and other information you choose to provide.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className={`${cormorant.className} text-2xl md:text-3xl font-semibold`}>2. How We Use Information</h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            We may use the information we collect about you to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Provide, maintain, and improve our services, including, for example, to facilitate payments, send receipts, provide products and services you request (and send related information), develop new features, provide customer support to Users and Drivers, develop safety features, authenticate users, and send product updates and administrative messages;</li>
            <li>Perform internal operations, including, for example, to prevent fraud and abuse of our services; to troubleshoot software bugs and operational problems; to conduct data analysis, testing, and research; and to monitor and analyze usage and activity trends;</li>
            <li>Send you communications we think will be of interest to you, including information about products, services, promotions, news, and events of Co-Labs and other companies, where permissible and according to local applicable laws.</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className={`${cormorant.className} text-2xl md:text-3xl font-semibold`}>3. Sharing of Information</h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            We do not share personal information about you except in the following cases:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>With third parties to provide you a service you requested through a partnership or promotional offering made by a third party or us;</li>
            <li>With the general public if you submit content in a public forum, such as blog comments, social media posts, or other features of our services that are viewable by the general public;</li>
            <li>With third parties with whom you choose to let us share information, for example other apps or websites that integrate with our API or Services, or those with an API or Service with which we integrate;</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className={`${cormorant.className} text-2xl md:text-3xl font-semibold`}>4. Contact Us</h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            If you have any questions about this Privacy Policy, please contact us at: privacy@co-labs.com
          </p>
        </section>
      </div>
    </div>
  );
}
