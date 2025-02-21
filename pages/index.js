// pages/index.js
import Balance from '../components/Balance';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <Link href="/balance" className="mb-8">
                <Balance width={250} height={250} fadeToLogo={true} />
            </Link>
            <p className="max-w-[600px] text-lg text-justify font-normal">
                Thrive is a mix of consultancy and advisory, holding company for high-growth software projects, and fund. It's owned and
                operated by Carl Cortright based in San Francisco CA.
            </p>
        </div>
    );
}