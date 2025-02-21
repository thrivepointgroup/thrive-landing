import { useEffect, useRef, useState } from 'react';

export default function Singularity({ 
  phi = (1 + Math.sqrt(5)) / 2,
  width = 300,
  height = 300
}) {
  const canvasRef = useRef(null);
  const [zoom, setZoom] = useState(1);
  const [centerX, setCenterX] = useState(-0.5);
  const [centerY, setCenterY] = useState(0);
  const animationRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const lastFrameTime = useRef(0);
  const FPS = 60;
  const frameInterval = 1000 / FPS;

  const params = {
    phi,
    boundary: 2,
    xMultiplier: 1,
    yMultiplier: (1 + Math.sqrt(5)) / 2,
    maxIterations: 100,
    zoomSpeed: 0.995  // Inverted from 1.005 to zoom out
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    const bufferCanvas = document.createElement('canvas');
    bufferCanvas.width = width;
    bufferCanvas.height = height;
    const bufferCtx = bufferCanvas.getContext('2d');

    function drawFractal(currentZoom) {
      const imageData = bufferCtx.createImageData(width, height);
      const data = imageData.data;
      const pixels = new Uint32Array(data.buffer);
      
      const centerXPx = width / 2;
      const centerYPx = height / 2;
      const radius = Math.min(width, height) / 2;
      const radiusSquared = radius * radius;

      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          const dx = x - centerXPx;
          const dy = y - centerYPx;
          const distanceSquared = dx * dx + dy * dy;
          
          if (distanceSquared <= radiusSquared) {
            const x0 = ((y - height/2) / (height * currentZoom)) + centerX;
            const y0 = (-(x - width/2) / (width * currentZoom)) + centerY;

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

            // Black and white coloring
            const brightness = iteration < params.maxIterations 
              ? 1 - (iteration / params.maxIterations)
              : 0;
            
            const value = Math.floor(brightness * 255);
            
            const rgba = (255 << 24) |
                        (value << 16) |
                        (value << 8) |
                        value;
            
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
      animationRef.current = requestAnimationFrame(animate);
    } else {
      drawFractal(zoom);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [zoom, centerX, centerY, isAnimating, params, width, height]);

  const handleCanvasClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCenterX(centerX + (x - width/2) / (width/2 * zoom));
    setCenterY(centerY + (y - height/2) / (height/2 * zoom));
    setZoom(zoom * params.phi);
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
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}
      />
    </div>
  );
} 