// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navigation = [
        { name: 'About', href: '/about' },
        { name: 'Consulting', href: '/consulting' },
        { name: 'Projects', href: '/projects' },
        { name: 'Angel Portfolio', href: '/ventures' },
        { name: 'Blog', href: 'https://blog.thrivepointgroup.com' },
    ];

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center space-x-3">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image
                                src="/squarelogo.png"
                                alt="Thrive"
                                width={32}
                                height={32}
                                className="w-8 h-8"
                                priority
                            />
                            <span className="font-semibold text-xl">Thrive</span>
                        </Link>
                    </div>

                    <div className="hidden sm:flex sm:space-x-2 items-center">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="px-3 py-2 text-sm"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="sm:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500"
                        >
                            {isOpen ? (
                                <X className="block h-6 w-6" />
                            ) : (
                                <Menu className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className=" block px-3 py-2 text-base"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}