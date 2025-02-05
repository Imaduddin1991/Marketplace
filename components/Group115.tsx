import React from 'react';

const Group115: React.FC = () => {
    return (
        <div className="relative py-16 top-[100px] bg-white">
            {/* Title */}
            <h1 className="text-center text-[32px] font-bold font-poppins text-ltblack mb-4">
                Browse The Range
            </h1>
            <p className="text-center text-[20px] font-poppins text-Silver mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
    );
};

export default Group115;
