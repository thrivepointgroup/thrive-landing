import Image from 'next/image';
import { projects } from '../projects';
import { portfolio } from '../portfolio';
import { useRef } from 'react';

export default function Banner() {
  const bannerRef = useRef(null);

  // Sort projects and portfolio separately
  const sortedProjects = [...projects].sort((a, b) => 
    a.name.localeCompare(b.name)
  );
  const sortedPortfolio = [...portfolio].sort((a, b) => 
    a.name.localeCompare(b.name)
  );

  // Combine with projects first and limit to 24 items (3 rows of 8)
  const allItems = [...sortedProjects, ...sortedPortfolio].slice(0, 24);

  const exportAsPNG = async () => {
    if (!bannerRef.current) return;
    
    try {
      const html2canvas = (await import('html2canvas')).default;
      
      const canvas = await html2canvas(bannerRef.current, {
        width: 1500,
        height: 500,
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        onclone: (document) => {
          // Force all images to load before capture
          const images = document.getElementsByTagName('img');
          return new Promise((resolve) => {
            let loaded = 0;
            Array.from(images).forEach((img) => {
              if (img.complete) {
                loaded++;
                if (loaded === images.length) resolve();
              } else {
                img.onload = () => {
                  loaded++;
                  if (loaded === images.length) resolve();
                };
              }
            });
            if (loaded === images.length) resolve();
          });
        }
      });
      
      const image = canvas.toDataURL("image/png", 1.0);
      const link = document.createElement('a');
      link.href = image;
      link.download = 'thrive-banner.png';
      link.click();
    } catch (error) {
      console.error('Error exporting banner:', error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div 
        ref={bannerRef}
        className="w-[1500px] h-[500px] bg-white relative flex items-center justify-center py-10"
      >
        <div className="w-[1400px] h-[380px] grid grid-cols-8 gap-6 content-center">
          {allItems.map((item) => (
            <div
              key={item.name}
              className="relative w-[140px] h-[140px] bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 flex items-center justify-center p-4"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-full h-full" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain"
                    unoptimized
                    priority
                    sizes="140px"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button
        onClick={exportAsPNG}
        className="mt-10 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mb-4"
      >
        Export as PNG
      </button>
    </div>
  );
} 