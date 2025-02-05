import React from 'react';
import Link from 'next/link';

const Footbar = () => {
    return (
        <div className="relative lg:w-[1440px] mx-auto lg:h-[505px] bg-white border-t border-Linegrey py-12 font-bold">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Address Section */}
                <div>
                    <span className="text-black text-[24px] font-bold">Furniro</span>
                    <p className="mt-4 text-[16px] text-grey">
                        400 University Drive Suite 200 Coral Gables,
                        <br />
                        FL 33134 USA
                    </p>
                </div>

                {/* Links Section */}
                <div className="relative lg:w-[68px] mx-auto h-[312px] space-y-10">
                    <h3 className="text-[16px] font-medium text-grey mb-4">Links</h3>
                    <ul className="space-y-10">
                        <li>
                            <Link href="/" className="text-black hover:text-gray-600">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" className="text-black hover:text-gray-600">
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-black hover:text-gray-600">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-black hover:text-gray-600">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Help Section */}
                <div className="relative lg:w-[140px] mx-auto h-[242px] space-y-10">
                    <h3 className="text-[16px] font-medium text-grey mb-4">Help</h3>
                    <ul className="space-y-10">
                        <li>
                            <Link href="#" className="text-black hover:text-gray-600">
                                Payment Options
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-black hover:text-gray-600">
                                Returns
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-black hover:text-gray-600">
                                Privacy Policies
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div className="relative lg:w-[286px] mx-auto h-[101px] space-y-10">

                    <h3 className="text-[16px] font-medium text-grey mb-4">Newsletter</h3>
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 space-x-10">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="border-b border-black text-sm text-gray-700 lg:w-[190px] mx-auto h-[24px] "
                        />
                        <button className="border-b border-black text-sm hover:text-gray-600 leading-6 lg:w-[75px] mx-auto h-[24px] ">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-Linegrey mt-8 pt-4">
                <p className="text-center text-[16px] text-black">
                    © 2023 Furniro. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footbar;
