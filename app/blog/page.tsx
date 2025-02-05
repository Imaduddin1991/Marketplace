import ProductGrid from "@/components/ProductGrid";
import React from "react";

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative  w-full h-[316px] font-poppins flex items-center justify-center bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/s0.svg')", // Ensure the image path is correct
        }}
      >
        <h1 className="text-[36px] md:text-[48px]  font-bold font-poppins text-ltblack">
          Blog
        </h1>
      </div>

      {/* Product Section */}
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
           
          </h2>
          <ProductGrid />

        </div>
      </main>
      <div
        className="relative w-full h-[316px] font-poppins flex items-center justify-center bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/Frame 161.svg')", // Ensure the image path is correct
        }}
      >
      </div>
    </div>
  );
};

export default Blog;
