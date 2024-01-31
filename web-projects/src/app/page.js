'use client';

import Head from 'next/head';
import Masonry from 'react-masonry-css';
import Image from "next/image";
import gifs from "../../public/assets/js/gifs";
import Link from "next/link";
import { useState } from "react";

// Navbar component
const Navbar = () => {
  return (
    <nav className="bg-slate-800 p-2">
      <div className="container mx-auto flex items-center justify-center h-16">
        <Link href="/" legacyBehavior>
          <a>
            <Image
              src="/assets/logos/webgala-logos_white.png"
              alt="WebGala logo"
              width={100}
              height={100}
              className="cursor-pointer hover:scale-90 transition-all duration-300 ease-in-out object-contain h-full"
            />
          </a>
        </Link>
      </div>
    </nav>
  );
};

// Grid component
const Grid = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  }

  return (
    <>
      {loading &&
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white z-50">
          Loading...
        </div>
      }
      <Masonry
        breakpointCols={{
          default: 4,
          3000: 6,
          2000: 5,
          1200: 3,
          900: 2,
          600: 1,
        }}
        className="flex w-full mx-auto my-3"
        columnClassName="my-masonry-grid_column"
      >
        {gifs.map((gifObj, index) => (
          <div key={index} className="p-2">
            <Link href={gifObj.link} legacyBehavior>
              <a onClick={handleClick}>
                <Image
                  src={gifObj.gif}
                  alt={`GIF ${index}`}
                  width={300}
                  height={200}
                  className="cursor-pointer hover:scale-90 transition-all duration-300 ease-in-out"
                />
              </a>
            </Link>
          </div>
        ))}
      </Masonry>
    </>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
      <p>&copy; 2024 Shlok Bharadwaj. All rights reserved.</p>
    </footer>
  );
};

// Main component
const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Your Landing Page</title>
        <meta name="description" content="Your landing page description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="flex-grow">
        <Grid />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
