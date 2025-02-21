import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Balance({ 
  phi = (1 + Math.sqrt(5)) / 2,
  width = 300,  // default smaller size
  height = 300
}) {
  const canvasRef = useRef(null);
  const [zoom, setZoom] = useState(1);
  const [centerX, setCenterX] = useState(-0.5);
  const [centerY, setCenterY] = useState(0);
  const animationRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const [targetZoom, setTargetZoom] = useState(1);
  const lastFrameTime = useRef(0);
  const [showLogo, setShowLogo] = useState(false);
  const [fadeProgress, setFadeProgress] = useState(0);
  const FPS = 60;
  const frameInterval = 1000 / FPS;
  const ZOOM_DURATION = 33000; // 33 seconds of zooming
  const FADE_DELAY = 13000; // Wait 13 seconds before starting fade
  const FADE_DURATION = 33000; // 33 seconds of fade

  // Adjust zoom speed for 13 seconds
  const params = {
    phi,
    boundary: 2,
    xMultiplier: 1,
    yMultiplier: (1 + Math.sqrt(5)) / 2,
    maxIterations: 100,
    zoomSpeed: 1.005  // Gentler zoom over longer duration
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Use a buffer canvas for double buffering
    const bufferCanvas = document.createElement('canvas');
    bufferCanvas.width = width;
    bufferCanvas.height = height;
    const bufferCtx = bufferCanvas.getContext('2d');

    function drawFractal(currentZoom) {
      const imageData = bufferCtx.createImageData(width, height);
      const data = imageData.data;
      const pixels = new Uint32Array(data.buffer);
      
      // Calculate circle parameters
      const centerXPx = width / 2;
      const centerYPx = height / 2;
      const radius = Math.min(width, height) / 2;
      const radiusSquared = radius * radius;

      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          // Check if pixel is within circle
          const dx = x - centerXPx;
          const dy = y - centerYPx;
          const distanceSquared = dx * dx + dy * dy;
          
          if (distanceSquared <= radiusSquared) {
            const x0 = (x - width/2) / (width * currentZoom) + centerX;
            const y0 = (y - height/2) / (height * currentZoom) + centerY;

            let xi = 0;
            let yi = 0;
            let iteration = 0;

            while (iteration < params.maxIterations) {
              if (xi * xi + yi * yi >= params.phi * params.boundary) break;
              
              const xtemp = (xi * xi - yi * yi) * params.xMultiplier + x0;
              yi = (2 * xi * yi * params.yMultiplier) + y0;
              xi = xtemp;
              iteration++;
            }

            const brightness = iteration < params.maxIterations 
              ? 1 - (iteration / params.maxIterations)
              : 0;
            
            const r = 62;
            const g = 71;
            const b = 132;
            
            const red = Math.floor(255 - (255 - r) * (1 - brightness));
            const green = Math.floor(255 - (255 - g) * (1 - brightness));
            const blue = Math.floor(255 - (255 - b) * (1 - brightness));
            
            const rgba = (255 << 24) |
                        (blue << 16) |
                        (green << 8) |
                        red;
            
            pixels[y * width + x] = rgba;
          } else {
            pixels[y * width + x] = 0;
          }
        }
      }

      bufferCtx.putImageData(imageData, 0, 0);
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(bufferCanvas, 0, 0);
    }

    function animate(currentTime) {
      if (!lastFrameTime.current) {
        lastFrameTime.current = currentTime;
        
        // Delay the start of fade animation by 13 seconds
        setTimeout(() => {
          setShowLogo(true);
          const startTime = Date.now();
          const fadeInterval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / FADE_DURATION, 1);
            setFadeProgress(progress);
            
            if (progress >= 1) {
              clearInterval(fadeInterval);
              setIsAnimating(false);
            }
          }, 16); // ~60fps
        }, FADE_DELAY);
      }
      
      const deltaTime = currentTime - lastFrameTime.current;

      if (deltaTime >= frameInterval) {
        if (isAnimating) {
          setZoom(prevZoom => {
            const step = prevZoom * (params.zoomSpeed - 1);
            return prevZoom + step;
          });
          drawFractal(zoom);
        } else {
          drawFractal(zoom);
        }
        
        lastFrameTime.current = currentTime;
      }

      animationRef.current = requestAnimationFrame(animate);
    }

    if (isAnimating) {
      setTargetZoom(zoom * 50); // Larger zoom target for longer duration
      animationRef.current = requestAnimationFrame(animate);
    } else {
      drawFractal(zoom);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [zoom, centerX, centerY, isAnimating, params, targetZoom, width, height]);

  const handleCanvasClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCenterX(centerX + (x - width/2) / (width/2 * zoom));
    setCenterY(centerY + (y - height/2) / (height/2 * zoom));
    setTargetZoom(zoom * params.phi);
  };

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="w-full overflow-hidden"
        onClick={handleCanvasClick}
        style={{
          aspectRatio: '1',
          width: `${width}px`,
          height: `${height}px`,
          margin: '0 auto',
          borderRadius: '50%',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          opacity: 1 - fadeProgress,
          transition: 'opacity 100ms linear'
        }}
      />
      <div 
        className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
        style={{
          opacity: fadeProgress,
          transition: 'opacity 100ms linear'
        }}
      >
        <Image
          src="/plain.svg"
          alt="Thrive"
          width={Math.floor(width * 0.8)}
          height={Math.floor(height * 0.8)}
          priority
        />
      </div>
    </div>
  );
} 