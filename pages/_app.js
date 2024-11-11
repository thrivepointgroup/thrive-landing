import '@/styles/globals.css';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>Thrive</title>
                <meta name="description" content="Thrive is a mix of software engineering consultancy, holding company for high-growth software projects, and angel fund. It's owned and operated by Carl Cortright based in San Francisco CA." />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://thrivepointgroup.com" />
                <meta property="og:title" content="Thrive Point Group" />
                <meta property="og:description" content="Thrive is a mix of software engineering consultancy, holding company for high-growth software projects, and angel fund. It's owned and operated by Carl Cortright based in San Francisco CA." />
                <meta property="og:image" content="https://thrivepointgroup.com/og.png" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://thrivepointgroup.com" />
                <meta name="twitter:title" content="Thrive Point Group" />
                <meta name="twitter:description" content="Thrive is a mix of software engineering consultancy, holding company for high-growth software projects, and angel fund. It's owned and operated by Carl Cortright based in San Francisco CA." />
                <meta name="twitter:image" content="https://thrivepointgroup.com/og.png" />
            </Head>
            <Navbar />
            <main className="flex-grow">
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
}