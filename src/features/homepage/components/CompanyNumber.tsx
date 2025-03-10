import { cormorant, montserrat } from "@/app/font";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { style } from "motion/react-client";
import Image from "next/image";
import React from "react";

const CompanyNumberSection = () => {
  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-12">
      {/* <div className="relative h-[220px] md:h-[640px] rounded-2xl overflow-hidden w-full md:hidden">
        <Image
          src="/coworknumber.avif" // Pastikan gambar tersedia di folder public
          alt="Modern coworking space interior"
          fill
          className="object-cover"
        />
      </div> */}
      <div className="grid grid-cols-1 grid-rows-3">
        <h1
          className={`${cormorant.className} text-4xl md:text-6xl text-center font-extrabold`}
        >
          Co-Labs Statistics that Speak Volumes
        </h1>
        <div className="grid grid-cols-2 row-span-2">
          <div className="flex flex-col items-center gap-4">
            <h2 className={`${cormorant.className} font-semibold text-6xl`}>
              <NumberTicker value={10000}/>+
            </h2>
            <h2 className={`${montserrat.className}`}>Happy Members</h2>
          </div>
          <div className="flex flex-col items-center gap-4">
          <h2 className={`${cormorant.className} font-semibold text-6xl`}>
              <NumberTicker value={15} />
            </h2>
            <h2 className={`${montserrat.className}`}>Locations</h2>
          </div>
          <div className="flex flex-col items-center gap-4">
          <h2 className={`${cormorant.className} font-semibold text-6xl`}>
              <NumberTicker value={93} />%
            </h2>
            <h2 className={`${montserrat.className}`}>
              Members Satisfaction Rate
            </h2>
          </div>
          <div className="flex flex-col items-center gap-4">
          <h2 className={`${cormorant.className} font-semibold text-6xl`}>
              <NumberTicker value={70} />+
            </h2>
            <h2 className={`${montserrat.className}`}>Monthly Events Hosted</h2>
          </div>
        </div>
      </div>
      <div className="relative h-[220px] md:h-[640px] rounded-2xl overflow-hidden w-full">
        <Image
          src="/coworknumber.avif" // Pastikan gambar tersedia di folder public
          alt="Modern coworking space interior"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default CompanyNumberSection;
