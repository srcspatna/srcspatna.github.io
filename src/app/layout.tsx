'use client';

import {useState} from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

// Define the type for the RootLayout's props
interface RootLayoutProps {
    children: React.ReactNode; // children is a special React type
}

export default function RootLayout({children}: RootLayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/logo_favicon.png" sizes="any"/>
            <link rel="apple-touch-icon" href="/logo.png"/>
            <title>SRCS, Patna</title>
        </head>
        <body className="flex flex-col min-h-screen bg-gray-100">
        <Navbar toggleSidebar={toggleSidebar}/>
        <div className="flex flex-1">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
            <main className="flex-1 p-4 md:p-6 overflow-auto">
                {children}
            </main>
        </div>
        <Footer/>
        </body>
        </html>
    );
}