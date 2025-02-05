import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="relative top-0 left-0 right-0 w-full bg-white flex items-center justify-between px-4 md:px-8 lg:w-[1440px] mx-auto h-[100px]">
            {/* Logo and Brand Name */}
            <div className="flex items-center space-x-2">
                <div
                    className="w-[50px] h-[32px] bg-no-repeat bg-center bg-contain"
                    style={{ backgroundImage: "url('Meubel House_Logos-01.svg')" }}
                ></div>
                <span className="text-[24px] md:text-[28px] lg:text-[34px] font-bold leading-[41px] text-black font-poppins">
                    Furniro
                </span>
            </div>

            {/* Center Navigation */}
            <div className="hidden md:flex space-x-4 lg:space-x-20">
                <Link href="/" className="font-medium text-base md:text-lg font-poppins leading-6 text-black hover:text-gray-600">
                    Home
                </Link>
                <Link href="/shop" className="font-medium text-base md:text-lg font-poppins leading-6 text-black hover:text-gray-600">
                    Shop
                </Link>
                <Link href="/blog" className="font-medium text-base md:text-lg font-poppins leading-6 text-black hover:text-gray-600">
                    Blog
                </Link>
                <Link href="/contact" className="font-medium text-base md:text-lg font-poppins leading-6 text-black hover:text-gray-600">
                    Contact
                </Link>
            </div>

            {/* Right Navigation Icons */}
            <div className="flex items-center space-x-4 md:space-x-6">
                <Link href="/account" className="hover:text-gray-600" title="Account">
                    <Image src="/account.svg" alt="Account" width={28} height={28}/>
                </Link>
                <Link href="/search" className="hover:text-gray-600" title="Search">
                    <Image src="/search.svg" alt="Search" width={28} height={28} />
                </Link>
                <Link href="/wishlist" className="hover:text-gray-600" title="Wishlist">
                    <Image src="/heart.svg" alt="Wishlist" width={28} height={28} />
                </Link>
                <Link href="/cart" className="hover:text-gray-600" title="Cart">
                    <Image src="/cart.svg" alt="Cart" width={28} height={28} />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
