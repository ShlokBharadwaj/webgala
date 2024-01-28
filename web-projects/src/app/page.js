'use client';

import React from 'react';
import Link from 'next/link';
import ThemeClock from "./theme-clock/ThemeClock";
import DoubleHeartClick from "./double-heart-click/DoubleHeartClick";
import DrinkWater from "./drink-water/DrinkWater";
import GitHubProfiles from "./github-profiles/GitHubProfiles";
import Hoverboard from "./hoverboard/Hoverboard";
import EventKeyCodes from "./event-key-codes/EventKeyCodes";
import HiddenSearchWidget from "./hidden-search-widget/HiddenSearchWidget";
import KineticCssLoader from "./kinetic-css-loader/KineticCssLoader";

const CardLink = ({ href, children }) => (
  <Link legacyBehavior href={href}>
    <a className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md block hover:shadow-lg transition-shadow">
      {children}
    </a>
  </Link>
);

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-800 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Web Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Explore 50 UI cards and templates.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-1">
        {/* Card 1 */}
        <CardLink href="/theme-clock">
          <ThemeClock />
        </CardLink>
        {/* Card 2 */}
        <CardLink href="/double-heart-click">
          <DoubleHeartClick />
        </CardLink>
        {/* Card 3 */}
        <CardLink href="/drink-water">
          <DrinkWater />
        </CardLink>
        {/* Card 4 */}
        {/* <CardLink href="/github-profiles"> */}
          <GitHubProfiles />
        {/* </CardLink> */}
        {/* Card 5 */}
        <CardLink href="/hoverboard">
          <Hoverboard />
        </CardLink>
        {/* Card 6 */}
        <CardLink href="/event-key-codes">
          <EventKeyCodes />
        </CardLink>
        {/* Card 7 */}
        <CardLink href="/hidden-search-widget">
          <HiddenSearchWidget />
        </CardLink>
        {/* Card 8 */}
        <CardLink href="/kinetic-css-loader">
          <KineticCssLoader />
        </CardLink>
      </div>

      <footer className="text-center mt-16">
        <p className="text-gray-600 dark:text-gray-400">
          © 2024 Shlok Bharadwaj. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
