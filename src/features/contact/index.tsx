import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { cormorant, montserrat } from "@/app/font";

export default function ContactPage() {
  return (
    <main className={`min-h-screen flex flex-col ${montserrat.className}`}>
      {/* Hero Section */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className={`text-5xl md:text-6xl font-bold leading-tight ${cormorant.className}`}>
            Get in{" "}
            <span className="relative">
              Touch
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-[#c5ff6b] -z-10 opacity-70"></span>
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl">
            Have questions about our spaces or membership options? We'd love to
            hear from you. Reach out to our team or visit one of our locations.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="w-full py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c5ff6b] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c5ff6b] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c5ff6b] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c5ff6b] focus:border-transparent"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="membership">Membership Inquiry</option>
                  <option value="tour">Schedule a Tour</option>
                  <option value="event">Event Space Rental</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c5ff6b] focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white rounded-full py-3 font-medium hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className={`text-3xl font-bold mb-6 ${cormorant.className}`}>Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#c5ff6b] mt-1" />
                  <div className="ml-4">
                    <h3 className="font-medium">Main Location</h3>
                    <p className="text-gray-600">
                      123 Workspace Avenue, Suite 500
                      <br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[#c5ff6b] mt-1" />
                  <div className="ml-4">
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-[#c5ff6b] mt-1" />
                  <div className="ml-4">
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">hello@cowork.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-[#c5ff6b] mt-1" />
                  <div className="ml-4">
                    <h3 className="font-medium">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8am - 8pm
                      <br />
                      Saturday: 9am - 5pm
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
          </div>
        </div>
      </section>

      {/* Locations Section */}

      {/* FAQ Section */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 mb-12">
            Can't find the answer you're looking for? Reach out to our customer
            support team.
          </p>

          <div className="space-y-6 text-left">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Location data
const locations = [
  {
    id: "downtown",
    name: "Downtown",
    address: "123 Workspace Avenue, Suite 500, San Francisco, CA 94107",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "mission",
    name: "Mission District",
    address: "456 Innovation Street, San Francisco, CA 94110",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "soma",
    name: "SoMa",
    address: "789 Tech Boulevard, San Francisco, CA 94103",
    image: "/placeholder.svg?height=400&width=600",
  },
];

// FAQ data
const faqs = [
  {
    question: "What membership options do you offer?",
    answer:
      "We offer flexible options including hot desks, dedicated desks, private offices, and virtual memberships. Each comes with different amenities and access levels to suit your needs.",
  },
  {
    question: "Can I book a meeting room without a membership?",
    answer:
      "Yes, our meeting rooms are available for non-members to book on an hourly or daily basis, subject to availability.",
  },
  {
    question: "Do you offer day passes?",
    answer:
      "Yes, we offer day passes that give you access to our common areas, high-speed internet, and complimentary coffee for a full business day.",
  },
  {
    question: "What's included in the membership fee?",
    answer:
      "All memberships include high-speed internet, access to common areas, coffee and refreshments, printing services, and community events. Higher tier memberships include additional amenities.",
  },
];
