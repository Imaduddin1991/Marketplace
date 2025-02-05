import React from 'react';

const Mockup: React.FC = () => {
    return (
        <div
            className="relative top-[100px] w-full h-[718px] bg-no-repeat bg-center bg-contain"
            style={{ backgroundImage: "url('mockup.svg')" }}
        >
            {/* Text Container */}
            <div
    className="absolute top-[20%] left-0 right-0 mx-auto w-[90%] lg:w-[643px] h-auto lg:h-[443px] p-8 rounded-md text-black bg-pink flex flex-col justify-center items-center text-center"
>
    <h1 className="text-[14px] lg:text-[16px] font-bold mb-4 font-poppins">New Arrival</h1>
    <h2 className="text-[32px] lg:text-[52px] font-extrabold mb-4 font-poppins text-gold">
        Discover Our
         New Collection
    </h2>
    <p className="text-[16px] lg:text-[20px] font-poppins mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
    </p>

    {/* Button */}
    <button className="w-[160px] lg:w-[222px] h-[50px] lg:h-[74px] text-[14px] lg:text-[16px] font-extrabold text-white bg-gold hover:bg-gray-600 hover:text-white transition-all duration-300 rounded-md">
        BUY NOW
    </button>
</div>

        </div>
    );
};

export default Mockup;
