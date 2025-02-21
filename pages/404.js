import { useRouter } from 'next/router';
import Link from 'next/link';
import Balance from '../components/Balance';

export default function Custom404() {
  const router = useRouter();
  
  // Create a hash from the current path
  const getHashFromPath = () => {
    const path = router.asPath;
    let hash = 0;
    for (let i = 0; i < path.length; i++) {
      const char = path.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    // Generate a phi value between 1.5 and 2.5
    return 1.5 + (Math.abs(hash) % 1000) / 1000;
  };

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-center">
          You are out of balance
        </h1>
        
        <Balance phi={getHashFromPath()} width={400} height={400} />
        
        <div className="text-center mt-8">
          <Link 
            href="/" 
            className="text-lg underline"
          >
            Return to home
          </Link>
        </div>
      </div>
    </div>
  );
} 