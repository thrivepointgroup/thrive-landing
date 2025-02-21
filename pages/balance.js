/// make some cool fucking fractals here please!!!

import Head from 'next/head';
import Balance from '../components/Balance';

export default function BalancePage() {
  // Using default golden ratio for phi
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center">
      <Head>
        <title>Balance | Thrive</title>
      </Head>

      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Balance
        </h1>
        
        <Balance width={600} height={600} />
      </div>
    </div>
  );
}