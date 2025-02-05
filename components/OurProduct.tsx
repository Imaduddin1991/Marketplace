"use client";

import React, { useEffect, useState } from 'react';
import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'yeh9zs5t', // Replace with your Sanity project ID
    dataset: 'production', // Change if using a different dataset
    useCdn: true, // Use CDN for faster response
    apiVersion: '2023-01-13', // Reverted to a stable and supported API version
});

const OurProducts: React.FC = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        client
            .fetch(`*[_type == "product"]{
                _id,
                name,
                description,
                price,
                oldPrice,
                "img": image.asset->url,
                discount
            }`)
            .then((data) => setProducts(data))
            .catch((err) => {
                console.error("Sanity fetch error:", err);
                setError("Failed to load products. Please try again later.");
            });
    }, []);

    return (
        <div className="relative py-16 bg-white">
            <h1 className="text-center text-[40px] font-bold font-poppins text-ltblack mb-12">
                Our Products
            </h1>
            {error ? (
                <p className="text-center text-red-500">{error}</p>
            ) : (
                <div className="container mx-auto px-40">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <div
                                key={product._id}
                                className="relative flex flex-col w-[285px] h-[446px] bg-no-repeat bg-center bg-contain hover:text-gray-600"
                                style={{ backgroundImage: `url(${product.img})` }}
                            >
                                {product.discount && (
                                    <div
                                        className={`absolute top-4 right-4 w-[48px] h-[48px] rounded-full text-white text-[16px] flex items-center justify-center 
                                            ${product.discount === 'New' ? 'bg-sky' : 'bg-Npink'}`}
                                    >
                                        {product.discount}
                                    </div>
                                )}
                                <div className="bg-bgGrey w-full h-[120px] mt-auto p-4">
                                    <h2 className="text-[24px] font-bold">{product.name}</h2>
                                    <p className="text-[16px] font-poppins text-ldGrey">{product.description}</p>
                                    <div className="text-[20px] flex items-center space-x-4">
                                        <h2>{product.price}</h2>
                                        {product.oldPrice && (
                                            <h2 className="text-ldGrey text-[16px] line-through">{product.oldPrice}</h2>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div className="text-center mt-12">
                <button className="w-[245px] h-[48px] text-[16px] font-extrabold text-lg font-poppins border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300">
                    Show More
                </button>
            </div>
        </div>
    );
};

export default OurProducts;
