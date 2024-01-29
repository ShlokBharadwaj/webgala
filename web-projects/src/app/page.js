'use client';

import Head from 'next/head';
import Masonry from 'react-masonry-css';

// Navbar component
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">Web Projects logo</div>
        {/* <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 mr-2 rounded border"
          />
          <button className="bg-gray-700 px-3 py-1 rounded text-white">
            Search
          </button>
        </div> */}
      </div>
    </nav>
  );
};

// Grid component
const Grid = () => {
  // Random GIF URLs for testing purposes
  const gifUrls = [
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmppb3I2N2V6amo0ZmU2ZjZzMGszOXc5dXh3MDQwYm4zdnptdWFtMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3og0IG0vkIQpuJoLvO/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGdtaGljOGhqcXVhYWN2bGN4N2Jtd2Z6azBycHBjOHpvNzJ3MWRpaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3DvcPXrHRjVDmBLhbBm/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjdtYzYxM2NrYWJ3c2h5NGVoejdmOG14enRiZ2c1cDVjcmExbGYzMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0K4aAtTGlBFE6ifC/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDB6bnV1anRjN2xkZHlwNjByanRmeDc1dXJibzl2ZGVhZWg0dDN6dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7qDHm7y5hWEnNxvi/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjcwZHRmY2phMnU0d3pwcGljdWIzbmEzcWFoNjB4MTV1b2NwYTh4aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fatcd1PnHPTDW/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGdtaGljOGhqcXVhYWN2bGN4N2Jtd2Z6azBycHBjOHpvNzJ3MWRpaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3DvcPXrHRjVDmBLhbBm/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjdtYzYxM2NrYWJ3c2h5NGVoejdmOG14enRiZ2c1cDVjcmExbGYzMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0K4aAtTGlBFE6ifC/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDB6bnV1anRjN2xkZHlwNjByanRmeDc1dXJibzl2ZGVhZWg0dDN6dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7qDHm7y5hWEnNxvi/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjcwZHRmY2phMnU0d3pwcGljdWIzbmEzcWFoNjB4MTV1b2NwYTh4aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fatcd1PnHPTDW/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGdtaGljOGhqcXVhYWN2bGN4N2Jtd2Z6azBycHBjOHpvNzJ3MWRpaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3DvcPXrHRjVDmBLhbBm/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjdtYzYxM2NrYWJ3c2h5NGVoejdmOG14enRiZ2c1cDVjcmExbGYzMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0K4aAtTGlBFE6ifC/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDB6bnV1anRjN2xkZHlwNjByanRmeDc1dXJibzl2ZGVhZWg0dDN6dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7qDHm7y5hWEnNxvi/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjcwZHRmY2phMnU0d3pwcGljdWIzbmEzcWFoNjB4MTV1b2NwYTh4aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fatcd1PnHPTDW/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG90ajJ0emczeHJmdGZldXdkYm1hZWpodzZ1ZXBybjc1cDZteGthaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRuo6sLetdllPAQ/giphy-downsized-large.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjdtYzYxM2NrYWJ3c2h5NGVoejdmOG14enRiZ2c1cDVjcmExbGYzMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0K4aAtTGlBFE6ifC/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDB6bnV1anRjN2xkZHlwNjByanRmeDc1dXJibzl2ZGVhZWg0dDN6dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7qDHm7y5hWEnNxvi/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG90ajJ0emczeHJmdGZldXdkYm1hZWpodzZ1ZXBybjc1cDZteGthaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRuo6sLetdllPAQ/giphy-downsized-large.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjdtYzYxM2NrYWJ3c2h5NGVoejdmOG14enRiZ2c1cDVjcmExbGYzMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0K4aAtTGlBFE6ifC/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDB6bnV1anRjN2xkZHlwNjByanRmeDc1dXJibzl2ZGVhZWg0dDN6dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7qDHm7y5hWEnNxvi/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajNldXpzaDU5OHM0ZWpta2lnbGt6OWt2djk1enh5dWdkbjVmY25meSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QrcujnCu5qWVyea2Xc/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG90ajJ0emczeHJmdGZldXdkYm1hZWpodzZ1ZXBybjc1cDZteGthaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRuo6sLetdllPAQ/giphy-downsized-large.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjdtYzYxM2NrYWJ3c2h5NGVoejdmOG14enRiZ2c1cDVjcmExbGYzMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0K4aAtTGlBFE6ifC/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG90ajJ0emczeHJmdGZldXdkYm1hZWpodzZ1ZXBybjc1cDZteGthaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRuo6sLetdllPAQ/giphy-downsized-large.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjdtYzYxM2NrYWJ3c2h5NGVoejdmOG14enRiZ2c1cDVjcmExbGYzMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0K4aAtTGlBFE6ifC/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDB6bnV1anRjN2xkZHlwNjByanRmeDc1dXJibzl2ZGVhZWg0dDN6dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7qDHm7y5hWEnNxvi/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjcwZHRmY2phMnU0d3pwcGljdWIzbmEzcWFoNjB4MTV1b2NwYTh4aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fatcd1PnHPTDW/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG90ajJ0emczeHJmdGZldXdkYm1hZWpodzZ1ZXBybjc1cDZteGthaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRuo6sLetdllPAQ/giphy-downsized-large.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDB6bnV1anRjN2xkZHlwNjByanRmeDc1dXJibzl2ZGVhZWg0dDN6dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7qDHm7y5hWEnNxvi/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjcwZHRmY2phMnU0d3pwcGljdWIzbmEzcWFoNjB4MTV1b2NwYTh4aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fatcd1PnHPTDW/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG90ajJ0emczeHJmdGZldXdkYm1hZWpodzZ1ZXBybjc1cDZteGthaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRuo6sLetdllPAQ/giphy-downsized-large.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjdtYzYxM2NrYWJ3c2h5NGVoejdmOG14enRiZ2c1cDVjcmExbGYzMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0K4aAtTGlBFE6ifC/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGdtaGljOGhqcXVhYWN2bGN4N2Jtd2Z6azBycHBjOHpvNzJ3MWRpaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3DvcPXrHRjVDmBLhbBm/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjdtYzYxM2NrYWJ3c2h5NGVoejdmOG14enRiZ2c1cDVjcmExbGYzMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0K4aAtTGlBFE6ifC/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDB6bnV1anRjN2xkZHlwNjByanRmeDc1dXJibzl2ZGVhZWg0dDN6dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7qDHm7y5hWEnNxvi/giphy.gif',
  ];

  const breakpointColumnsObj = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    900: 2,
    600: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex w-full mx-auto my-3"
      columnClassName="my-masonry-grid_column"
    >
      {gifUrls.map((url, index) => (
        <div key={index} className="p-2">
          <img src={url} alt={`GIF ${index}`} className="w-full mb-4" />
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
