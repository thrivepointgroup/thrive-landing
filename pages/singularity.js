/// here, do it in here instead and make it the full page and expand it, override the navbar etc

import { useEffect, useState } from 'react';
import Singularity from '../components/Singularity';

export default function SingularityPage() {
  const [dimensions, setDimensions] = useState({ width: 800, height: 800 });

  useEffect(() => {
    // Update dimensions on mount and window resize
    function updateDimensions() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const size = Math.max(width, height); // Make it square and cover the viewport
      setDimensions({ width: size, height: size });
    }

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Singularity 
          width={dimensions.width} 
          height={dimensions.height}
        />
      </div>
    </div>
  );
}

// Disable the default layout for this page
SingularityPage.getLayout = function getLayout(page) {
  return page;
};
