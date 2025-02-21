/// make some cool fucking fractals here please!!!

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Balance from '../components/Balance';

export default function BalancePage() {
  const [dimensions, setDimensions] = useState({ width: 800, height: 800 });

  useEffect(() => {
    function updateDimensions() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const size = Math.min(width, height) * 0.7; // Slightly smaller to fit frame
      setDimensions({ width: size, height: size });
    }

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden bg-white">
      <Head>
        <title>Duality</title>
      </Head>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Frame */}
          <div className="absolute -inset-8 border border-[#3E4784] opacity-20" />
          <div className="absolute -inset-16 border border-[#3E4784] opacity-10" />
          <div className="absolute -inset-24 border border-[#3E4784] opacity-5" />
          
          {/* Fractal */}
          <Balance 
            width={dimensions.width} 
            height={dimensions.height}
            fadeToLogo={false}
          />
          
          {/* Center Link */}
          <Link 
            href="/singularity"
            className="absolute top-1/2 left-1/2 w-1 h-1 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
            aria-label="Enter singularity"
          />
        </div>
      </div>
    </div>
  );
}

// Disable the default layout for this page
BalancePage.getLayout = function getLayout(page) {
  return page;
};