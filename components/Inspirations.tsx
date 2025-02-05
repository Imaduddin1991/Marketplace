import React from 'react';


const Inspirations: React.FC = () => {
    return (
        <div className="relative lg:w-[1440px] mx-auto py-16 bg-bgPink">
            {/* Title Section */}
            <div className="container mx-auto px-4">
                <h1 className="text-[40px] font-bold font-poppins text-ltblack mb-4">
                    50+ Beautiful Rooms Inspiration
                </h1>
                <p className="text-[16px] font-poppins text-Silver mb-12">
                    Our designers have created many beautiful room prototypes to inspire you.
                </p>

               {/* Grid Section */}
            <div className="container mx-auto px-48">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="/Dining.svg"
                            alt="Dining"
                            className="w-full max-w-[300px] h-auto"
                        />
                        <h2 className="mt-4 text-[24px] font-bold text-ltblack">
                            Dining
                        </h2>
                    </div>
                    {/* Card 2 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="/Living.svg"
                            alt="Living"
                            className="w-full max-w-[300px] h-auto"
                        />
                        <h2 className="mt-4 text-[24px] font-bold text-ltblack">
                            Living
                        </h2>
                    </div>
                    {/* Card 3 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="/Bedroom.svg"
                            alt="Bedroom"
                            className="w-full max-w-[300px] h-auto"
                        />
                        <h2 className="mt-4 text-[24px] font-bold text-ltblack">
                            Bedroom
                        </h2>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Inspirations;
