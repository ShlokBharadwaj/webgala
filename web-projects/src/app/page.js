import React from 'react';

const LandingPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100 dark:bg-gray-800">
      <div className="mb-32 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center lg:max-w-5xl lg:w-full lg:mb-0">
        <div className="group rounded-lg border border-transparent p-8 transition-colors hover:border-gray-300 bg-blue-200 dark:bg-blue-700 hover:bg-blue-300 hover:dark:bg-blue-800">
          <h2 className="mb-3 text-2xl font-semibold text-white ">
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-80 text-white">
            Find in-depth information about Next.js features and API.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent p-8 transition-colors hover:border-gray-300 bg-green-200 dark:bg-green-700 hover:bg-green-300 hover:dark:bg-green-800">
          <h2 className="mb-3 text-2xl font-semibold text-white">
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-80 text-white ">
            Learn about Next.js in an interactive course with quizzes!
          </p>
        </div>

        <div className="group rounded-lg border border-transparent p-8 transition-colors hover:border-gray-300 bg-purple-200 dark:bg-purple-700 hover:bg-purple-300 hover:dark:bg-purple-800">
          <h2 className="mb-3 text-2xl font-semibold text-white ">
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-80 text-white ">
            Explore starter templates for Next.js.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent p-8 transition-colors hover:border-gray-300 bg-red-200 dark:bg-red-700 hover:bg-red-300 hover:dark:bg-red-800">
          <h2 className="mb-3 text-2xl font-semibold text-white ">
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-80 text-white ">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
