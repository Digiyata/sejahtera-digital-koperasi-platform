
import React from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    title: "Gabung Sekarang!",
    description: "Menjadi anggota koperasi digital yang terpercaya.",
    image: "/images/hero-1.jpg",
    buttonText: "Daftar",
    buttonLink: "/landing/register",
  },
  {
    title: "Pinjaman Mudah",
    description: "Ajukan pinjaman usaha dengan syarat ringan dan proses cepat.",
    image: "/images/hero-2.jpg",
    buttonText: "Pelajari",
    buttonLink: "/landing/program",
  },
  {
    title: "Simpan Aman",
    description: "Simpan uang Anda dan nikmati bagi hasil setiap tahun.",
    image: "/images/hero-3.jpg",
    buttonText: "Info Lengkap",
    buttonLink: "/landing/program",
  },
];

const HeroSlider = () => {
  return (
    <Carousel className="relative w-full">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[500px] w-full overflow-hidden">
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="absolute inset-0 bg-black/50" />
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex h-full items-center justify-center">
                <div className="text-center text-white px-4 max-w-3xl mx-auto">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl mb-8">
                    {slide.description}
                  </p>
                  <Link
                    to={slide.buttonLink}
                    className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition duration-200"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2" />
      <CarouselNext className="absolute right-4 top-1/2" />
    </Carousel>
  );
};

export default HeroSlider;
