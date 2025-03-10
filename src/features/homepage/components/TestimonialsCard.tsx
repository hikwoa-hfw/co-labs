"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface TestimonialsCardProps {
  review: string;
  name: string;
  company: string;
  companyLogo?: any | string;
}

const TestimonialsCard: FC<TestimonialsCardProps> = ({
  review,
  company,
  companyLogo,
  name,
}) => {
  return (
    <div className="w-[300px] sm:w-[400px] md:w-[500px] mx-4">
      <Card className="h-full overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardContent className=" to-white">
          <Quote className="text-blue-600 w-8 h-8 mb-4" />
          <p className="text-sm sm:text-base text-gray-800 italic leading-relaxed mb-4 line-clamp-4">
            {review}
          </p>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-sm sm:text-base text-gray-900 capitalize">
                {name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">{company}</p>
            </div>
            <div className="relative w-16 h-8 sm:w-20 sm:h-10">
              {/* <Image
                src={companyLogo}
                alt={`${company} logo`}
                layout="fill"
                objectFit="contain"
              /> */}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestimonialsCard;
