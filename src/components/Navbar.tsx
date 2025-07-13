// components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Define the type for Navbar's props
interface NavbarProps {
    toggleSidebar: () => void; // A function that takes no arguments and returns nothing (void)
}

export default function Navbar({ toggleSidebar }: NavbarProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="bg-gray-800 p-4 shadow-md">
            <div className="mx-auto flex justify-between items-center">
                {/* Brand/Logo */}
                <Link href="/" className="text-white text-2xl font-bold">
                    <Image src="/logo_name.png" alt="Logo"  width="100" height="50"/>
                </Link>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex space-x-6 items-center">
                    <li>
                        <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="//srcspatna.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                            Main Website
                        </Link>
                    </li>
                    <li>
                        <Link href="//erp.srcspatna.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                            ERP
                        </Link>
                    </li>
                    {/* Example: User Avatar with Dropdown */}
                    <li className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center text-gray-300 hover:text-white focus:outline-none"
                        >
                            <img
                                className="w-8 h-8 rounded-full border-2 border-gray-600"
                                src="/logo.png"
                                alt="logo"
                            />
                            <svg
                                className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${
                                    isDropdownOpen ? 'rotate-180' : 'rotate-0'
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                                <Link href="//srcspatna.com" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    Main Website
                                </Link>
                                <Link href="//erp.srcspatna.com" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    ERP
                                </Link>
                            </div>
                        )}
                    </li>
                </ul>

                {/* Mobile Menu Button (Hamburger) */}
                <button
                    onClick={toggleSidebar}
                    className="md:hidden text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-md p-1"
                    aria-label="Toggle mobile menu"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </nav>
    );
}