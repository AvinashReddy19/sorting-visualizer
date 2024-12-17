'use client';
import React from 'react';
import Link from 'next/link';
import '../app/globals.css'; // Import global styles
import SortingVisualizer from '../components/SortingVisualizer';
// 

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sorting Visualizer</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {/* Navbar */}
        <nav className="bg-blue-600 text-white p-4">
            <Link href="/" className="text-xl font-bold">Sorting Visualizer</Link>
            <div className="space-x-4">
              <Link href="/about" className="hover:text-gray-200">About</Link>
              <Link href="/contact" className="hover:text-gray-200">Contact</Link>
            </div>
        </nav>

        {/* Main content area */}
        <main className="flex-1">
        <SortingVisualizer />
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center p-4">
          <p>&copy; 2024 Sorting Visualizer. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
