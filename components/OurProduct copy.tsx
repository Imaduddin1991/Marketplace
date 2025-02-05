import React from 'react';

const OurProducts: React.FC = () => {
    return (
        <div className="relative py-16 bg-white">
            {/* Title */}
            <h1 className="text-center text-[40px] font-bold font-poppins text-ltblack mb-12">
                Our Products
            </h1>

            {/* Products Grid */}
            <div className="container mx-auto px-40">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Product Card */}
                    {[ 
                        {
                            id: 1,
                            img: '1.svg',
                            discount: '-30%',
                            name: 'Syltherine',
                            description: 'Stylish cafe chair.',
                            price: 'Rp 2.500.000',
                            oldPrice: 'Rp 3.500.000',
                        },
                        {
                            id: 2,
                            img: '2.svg',
                            discount: '-30%',
                            name: 'Leviosa',
                            description: 'Stylish cafe chair.',
                            price: 'Rp 2.500.000',
                            oldPrice: 'Rp 3.500.000',
                        },
                        {
                            id: 3,
                            img: '3.svg',
                            discount: '-50%',
                            name: 'Lolite',
                            description: 'Luxury big sofa.',
                            price: 'Rp 7.000.000',
                            oldPrice: 'Rp 14.000.000',
                        },
                        {
                            id: 4,
                            img: '4.svg',
                            discount: 'New',
                            name: 'Respira',
                            description: 'Outdoor bar table and stool.',
                            price: 'Rp 500.000',
                            oldPrice: '',
                        },
                        {
                            id: 5,
                            img: '5.svg',
                            discount: '',
                            name: 'Grifo',
                            description: 'Night lamp.',
                            price: 'Rp 1.500.000',
                            oldPrice: '',
                        },
                        {
                            id: 6,
                            img: '6.svg',
                            discount: 'New',
                            name: 'Muggo',
                            description: 'Small mug.',
                            price: 'Rp 150.000',
                            oldPrice: '',
                        },
                        {
                            id: 7,
                            img: '7.svg',
                            discount: '-50%',
                            name: 'Pingky',
                            description: 'Cute bed set.',
                            price: 'Rp 7.000.000',
                            oldPrice: 'Rp 14.000.000',
                        },
                        {
                            id: 8,
                            img: '8.svg',
                            discount: 'New',
                            name: 'Potty',
                            description: 'Minimalist flower pot.',
                            price: 'Rp 500.000',
                            oldPrice: '',
                        },
                    ].map((product) => (
                        <div
                            key={product.id}
                            className="relative flex flex-col w-[285px] h-[446px] bg-no-repeat bg-center bg-contain hover:text-gray-600 hover:"
                            style={{ backgroundImage: `url(${product.img})` }}
                        >
                            {/* Discount Badge */}
                            {product.discount && (
                                <div
                                    className={`absolute top-24 right-6 w-[48px] h-[48px] rounded-full text-white text-[16px] flex items-center justify-center 
                                        ${product.discount === 'New' ? 'bg-sky' : 'bg-Npink'}`}
                                >
                                    {product.discount}
                                </div>
                            )}
                            {/* Product Details */}
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

            {/* Show More Button */}
            <div className="text-center mt-12">
                <button className="w-[245px] h-[48px] text-[16px] font-extrabold text-lg font-poppins border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300">
                    Show More
                </button>
            </div>
        </div>
    );
};

export default OurProducts;
