/// here, do it in here instead and make it the full page and expand it, override the navbar etc

import { useEffect, useState } from 'react';
import Singularity from '../components/Singularity';

export default function SingularityPage() {
  const [dimensions, setDimensions] = useState({ width: 800, height: 800 });

  useEffect(() => {
    function updateDimensions() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const size = Math.min(width, height) * 0.7;
      setDimensions({ width: size, height: size });
    }

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden bg-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Frame */}
          <div className="absolute -inset-8 border border-[#3E4784] opacity-20" />
          <div className="absolute -inset-16 border border-[#3E4784] rotate-45 opacity-10" />
          <div className="absolute -inset-24 border border-[#3E4784] opacity-5" />
          
          {/* Fractal */}
          <Singularity 
            width={dimensions.width} 
            height={dimensions.height}
          />
        </div>
      </div>
    </div>
  );
}

// Disable the default layout for this page
SingularityPage.getLayout = function getLayout(page) {
  return page;
};
