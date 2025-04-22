
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    title: "Membangun Kesejahteraan Bersama",
    description: "Rasakan manfaat menjadi Anggota dengan berbagai layanan dan program yang tersedia. Masa depan lebih terencana bersama Koperasi Astra.",
    image: "/images/hero-1.jpg",
    buttonText: "Daftar Sekarang",
    buttonLink: "/landing/register",
  }
];

const HeroSlider = () => {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <Carousel 
      className="relative w-full" 
      opts={{ loop: true }}
      onSelect={(api) => {
        const currentSlide = api?.selectedScrollSnap();
        if (currentSlide !== undefined) {
          setActiveDot(currentSlide);
        }
      }}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="bg-astra-yellow">
            <div className="relative h-[500px] w-full overflow-hidden">
              <div className="container mx-auto h-full px-4">
                <div className="flex h-full">
                  {/* Content */}
                  <div className="w-full md:w-1/2 flex items-center">
                    <div className="text-left text-astra-blue pr-8">
                      <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {slide.title}
                      </h2>
                      <p className="text-lg mb-8">
                        {slide.description}
                      </p>
                      <Link
                        to={slide.buttonLink}
                        className="inline-flex items-center px-6 py-3 bg-white text-astra-blue font-bold rounded-full hover:bg-gray-100 transition duration-200"
                      >
                        {slide.buttonText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className="hidden md:block w-1/2 relative">
                    <div className="absolute right-0 top-0 bottom-0 w-full">
                      <div className="relative h-full w-full">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-4/5 w-4/5 bg-astra-blue skew-x-12 skew-y-0 z-0"></div>
                        <div className="absolute inset-0 z-10 flex items-center justify-end">
                          <img 
                            src="/images/hero-mobile-app.png" 
                            alt="Koperasi Astra App" 
                            className="h-4/5 object-contain z-20"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
      {/* Custom navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveDot(index)}
            className={`w-3 h-3 rounded-full ${
              activeDot === index ? "bg-astra-blue" : "bg-white bg-opacity-50"
            } transition-all duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  );
};

export default HeroSlider;
