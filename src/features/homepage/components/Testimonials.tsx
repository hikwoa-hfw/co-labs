import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import { testimonialsData } from "./componentData";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import { cormorant, montserrat } from "@/app/font";

const Testimonials = () => {
  const testimonials = testimonialsData;

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2
          className={`${cormorant.className} text-4xl md:text-6xl font-extrabold text-center mb-8 flex items-center justify-center gap-4`}
        >
          Inside
          <span className="relative items-center flex w-32 h-8 mx-1 top-1">
            <Image
              src="/Rectangle 1.png"
              alt="Decorative element"
              width={150}
              height={10}
              className="object-cover rounded-full"
            />
          </span>
          Co-Labs
        </h2>
        <p className={`${montserrat.className} text-center max-w-2xl mx-auto`}>
          Don't just take our word for it. Here's what some of our valued
          members have to say about their experience working with Co-Labs.
        </p>
      </div>
      <Marquee pauseOnHover={true} className="[--duration:40s]">
        {testimonials.map((review, index) => (
          <TestimonialsCard
            key={index}
            company={review.role}
            review={review.text}
            name={review.name}
          />
        ))}
      </Marquee>
    </section>
  );
};

export default Testimonials;
