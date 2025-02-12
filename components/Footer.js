// components/Footer.js
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white mt-auto border-t border-gray-200">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center space-y-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Thrive Point Group LLC. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-6">
                        <Link 
                            href="/legal"
                            className="text-gray-500 hover:text-gray-700 text-sm"
                        >
                            Legal
                        </Link>
                        <a 
                            href="https://x.com/ThriveGroupHQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-700 text-sm"
                        >
                            Twitter
                        </a>
                        <a 
                            href="https://www.linkedin.com/company/thrivepointgroupsv"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-700 text-sm"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}