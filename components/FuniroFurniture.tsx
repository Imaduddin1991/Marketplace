import React from 'react';

const FuniroFurniture: React.FC = () => {
    const images = [
        { src: 'ff1.svg', alt: 'Image 1', style: 'w-[274px] h-[382px]' },
        { src: 'ff2.svg', alt: 'Image 2', style: 'w-[451px] h-[312px]' },
        { src: 'ff3.svg', alt: 'Image 3', style: 'w-[381px] h-[382px]' },
        { src: 'ff4.svg', alt: 'Image 4', style: 'w-[344px] h-[242px]' },
        { src: 'ff5.svg', alt: 'Image 5', style: 'w-[295px] h-[392px]' },
        { src: 'ff6.svg', alt: 'Image 6', style: 'w-[290px] h-[348px]' },
        { src: 'ff7.svg', alt: 'Image 7', style: 'w-[425px] h-[433px]' },
        { src: 'ff8.svg', alt: 'Image 8', style: 'w-[178px] h-[242px]' },
        { src: 'ff9.svg', alt: 'Image 9', style: 'w-[258px] h-[196px]' },
    ];

    return (
        <div className="relative mx-auto max-w-[1440px] p-4 sm:p-8">
            {/* Title and Subtitle */}
            <p className="text-center text-[16px] sm:text-[18px] md:text-[20px] font-poppins text-ldGrey mb-2">
                Share your setup with.
            </p>
            <h1 className="text-center text-[28px] sm:text-[32px] md:text-[40px] text-ltblack font-bold font-poppins mb-6">
                #FuniroFurniture
            </h1>

            {/* Images Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`relative ${image.style} bg-cover bg-center hover:opacity-80`}
                        style={{ backgroundImage: `url(${image.src})` }}
                        role="img"
                        aria-label={image.alt}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default FuniroFurniture;
