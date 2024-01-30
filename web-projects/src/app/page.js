'use client';

import Head from 'next/head';
import Masonry from 'react-masonry-css';
import Image from "next/image";
import gifs from "../../public/assets/js/gifs";

// Navbar component
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">Web Projects logo</div>
      </div>
    </nav>
  );
};

// Grid component
const Grid = () => {

  return (
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
      {gifs.map((gif, index) => (
        <div key={index} className="p-2">
          <Image
            src={gif}
            alt={`GIF ${index}`}
            width={300}
            height={200} 
            className="cursor-pointer hover:scale-90 transition-all duration-300 ease-in-out"
            />
        </div>
      ))}
    </Masonry>
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
