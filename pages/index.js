// pages/index.js
import Image from 'next/image';

export default function Home() {
    return (
        <div className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="mb-12 animate-slowspin">
                <Image
                    src="/plain.svg"
                    alt="Thrive"
                    width={200}
                    height={80}
                    priority
                />
            </div>
            <p className="max-w-[600px] text-lg text-justify font-normal">
                Thrive is a mix of consultancy and advisory, holding company for high-growth software projects, and fund. It's owned and
                operated by Carl Cortright based in San Francisco CA.
            </p>
        </div>
    );
}