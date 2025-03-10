"use client";
import Image from "next/image";
import Link from "next/link";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { faqs, getServiceFeatures, getServicePricing, servicesData, testimonialsData } from "./components/componentData";
import { useEffect, useState } from "react";
import { User } from "@/types/user";
import { cormorant, montserrat } from "@/app/font";

export default function ServicesPage() {
  return (
    <main className={`${montserrat.className} min-h-screen flex flex-col`}>
      {/* Hero Section */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className={`${cormorant.className} text-5xl md:text-6xl font-bold leading-tight`}>
            Our{" "}
            <span className="relative">
              Services
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-[#c5ff6b] -z-10 opacity-70"></span>
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl">
            Discover our range of flexible workspace solutions designed to meet
            the needs of professionals, teams, and businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {servicesData.map((service, index) => (
        <section
          key={index}
          id={service.title.toLowerCase().replace(/\s+/g, "-")}
          className={`w-full py-16 px-4 md:px-8 lg:px-16 ${
            index % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${index % 2 !== 0 ? "lg:order-2" : ""}`}>
              <h2 className={`${cormorant.className} text-3xl md:text-4xl font-bold mb-6`}>
                {service.title}
              </h2>
              <p className="text-lg text-gray-700 mb-8">{service.overview}</p>

              <div className="space-y-4 mb-8">
                {getServiceFeatures(service.title).map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <Check className="h-6 w-6 text-[#c5ff6b] mt-1 flex-shrink-0" />
                    <p className="ml-3 text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gray-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Pricing Options</h3>
                <div className="space-y-3">
                  {getServicePricing(service.title).map((price, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center"
                    >
                      <span className="font-medium">{price.plan}</span>
                      <span className="text-lg font-bold">{price.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href="/contact">
                    <Button className="w-full">Inquire Now</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className={`relative h-[500px] rounded-2xl overflow-hidden ${
                index % 2 !== 0 ? "lg:order-1" : ""
              }`}
            >
              <Image
                src={service.icon || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      ))}

      {/* Testimonials Section */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              What Our Members Say
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our community has to
              say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="bg-[#2a2a2a] p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "fill-[#c5ff6b] text-[#c5ff6b]"
                          : "text-gray-500"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`${cormorant.className} text-3xl md:text-5xl font-bold`}>
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-700">
              Find answers to common questions about our services and membership
              options.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-[#c5ff6b] bg-opacity-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6`}>
            Ready to transform your workspace experience?
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Join our community of innovators, creators, and entrepreneurs today.
            Schedule a tour to experience our spaces firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="px-8 py-6 text-lg">Schedule a Tour</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

