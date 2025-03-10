import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { services } from "./componentDatas";
import { cormorant } from "@/app/font";
import { Button } from "./ui/button";

const ServicesComponent = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-4 md:my-12">
      <h2
        className={`${cormorant.className} text-4xl md:text-6xl font-extrabold text-center mb-16 flex items-center justify-center gap-4`}
      >
        Co-Labs
        <span className="relative items-center flex w-32 h-8 mx-1 top-1">
          <Image
            src="/Rectangle 2.png"
            alt="Decorative element"
            width={150}
            height={10}
            className="object-cover rounded-full"
          />
        </span>
        Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {services.map((service, index) => (
          <Card
            className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            key={index}
          >
            <CardHeader className="text-center">
              <div className="w-full h-72 rounded-lg mx-auto mb-4 relative overflow-hidden">
                <Image
                  src={service.icon}
                  alt={service.title + " thumnail"}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform group-hover:scale-110"
                />
              </div>
              <h2 className="font-semibold text-xl md:text-2xl xl:text-3xl text-gray-800">
                {service.title}
              </h2>
            </CardHeader>
            <CardContent>
              <div className="text-center md:text-lg text-gray-600 line-clamp-3">
                {service.overview}
              </div>
            </CardContent>
            <CardFooter className="justify-center"></CardFooter>
          </Card>
        ))}
      </div>
      <div className="my-8 flex justify-center">
        <Link
          href={"/services"}
          className="group inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-all"
        >
          <Button className="cursor-pointer p-4">
            Learn More
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesComponent;
