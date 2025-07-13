// components/Sidebar.tsx
'use client';

import Link from 'next/link';
import Image from "next/image";

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

export default function Sidebar({isOpen, toggleSidebar}: SidebarProps) {
    return (
        <>
            {/* Overlay for mobile when sidebar is open */}
            {/* This div should still only appear on small devices when open */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg
                   transform transition-transform duration-300 ease-in-out
                   ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                   // 👇👇👇 Changes are here 👇👇👇
                   md:hidden // Hide the sidebar completely on medium screens and up
                   z-40`} // Ensure it's above other content on mobile
            >
                <div className="p-4 flex justify-between items-center border-b border-gray-700">
                    <Link href="/" className="text-white text-2xl font-bold p-1 rounded-md bg-white">
                        <Image src="/logo_name.png" alt="Logo" width="100" height="50"/>
                    </Link>
                    {/* Close button always visible within the sidebar for mobile */}
                    <button
                        onClick={toggleSidebar}
                        className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-md p-1"
                        aria-label="Close mobile menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <nav className="p-4">
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/"
                                className="block px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
                                onClick={toggleSidebar}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="//srcspatna.com"
                                className="block px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
                                onClick={toggleSidebar}
                            >
                                Main Website
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="//erp.srcspatna.com"
                                className="block px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
                                onClick={toggleSidebar}
                            >
                                ERP
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}