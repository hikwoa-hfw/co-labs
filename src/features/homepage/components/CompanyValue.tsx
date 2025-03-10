import Image from "next/image";
import { CreditCard, SpaceIcon as Planet, User } from "lucide-react";
import { cormorant } from "@/app/font";
import { motion } from "framer-motion";

export default function CompanyValue() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 container">
      <h2
        className={`${cormorant.className} text-4xl md:text-6xl font-extrabold text-center mb-16 flex items-center justify-center gap-4`}
      >
        Why Choose
        <span className="relative items-center flex w-32 h-8 mx-1 top-1">
          <Image
            src="/Rectangle 1.png"
            alt="Decorative element"
            width={150}
            height={10}
            className="object-cover rounded-full"
          />
        </span>
        Co-Labs?
      </h2>

      <div className="grid md:grid-cols-3 gap-10 mt-10">
        {/* Flexible Spaces */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 relative">
            <div className="absolute -z-10 w-12 h-12 bg-[#BFFF00] rounded-full -right-2 -bottom-2"></div>
            <Planet className="w-12 h-12" />
          </div>
          <h3 className={`${cormorant.className} text-2xl font-bold mb-4`}>
            Flexible Spaces
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Whether you're a solopreneur, startup, or an established enterprise,
            our flexible office solutions cater to your evolving needs.
          </p>
        </div>

        {/* Transparent Pricing */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 relative">
            <div className="absolute -z-10 w-12 h-12 bg-[#00B2FF] rounded-full -right-2 -bottom-2"></div>
            <CreditCard className="w-12 h-12" />
          </div>
          <h3 className={`${cormorant.className} text-2xl font-bold mb-4`}>
            Transparent Pricing
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Choose a plan that suits your budget and business objectives, and
            experience the value of a premium coworking space without breaking
            the bank.
          </p>
        </div>

        {/* Tailored Memberships */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 relative">
            <div className="absolute -z-10 w-12 h-12 bg-[#FF9ED8] rounded-full -right-2 -bottom-2"></div>
            <User className="w-12 h-12" />
          </div>
          <h3 className={`${cormorant.className} text-2xl font-bold mb-4`}>
            Tailored Memberships
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Whether you prefer the flexibility of a hot desk or the exclusivity
            of a private office, Co-Labs offers tailored solutions to suit every
            working style.
          </p>
        </div>
      </div>
    </section>
  );
}
