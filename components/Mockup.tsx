import React from 'react';

const Mockup: React.FC = () => {
    return (
        <div
            className="relative top-[0px] w-full  lg:w-[1440px] lg:h-[718px] mx-auto my-auto bg-no-repeat bg-center bg-contain"
            style={{ backgroundImage: "url('mockup.svg')" }}
        >
            {/* Text Container */}
            <div
    className="relative top-[20%] left-[25%] right-0 mx-auto my-auto w-full lg:w-[643px] lg:h-[443px] p-8 rounded-md text-black bg-pink flex flex-col justify-center items-start text-wrap"
>
    <h1 className="text-[14px] lg:text-[16px] font-bold mb-4 font-poppins">New Arrival</h1>
    <h2 className="text-[34px] lg:text-[52px] font-extrabold mb-4 font-poppins text-gold">
        Discover Our
         New Collection
    </h2>
    <p className="text-[16px] lg:text-[20px] font-poppins mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
    </p>

    {/* Button */}
    <button className="w-[160px] lg:w-[222px] h-[50px] lg:h-[74px] text-[14px] lg:text-[16px] font-extrabold text-white bg-gold hover:text-gray-600 transition-all duration-300 rounded-none">
        BUY NOW
    </button>
</div>

        </div>
    );
};

export default Mockup;
