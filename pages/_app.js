import '@/styles/globals.css';
import Head from 'next/head';  // Changed this line
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>Thrive</title>
                <meta name="description" content="Thrive Point Group" />
            </Head>
            <Navbar />
            <main className="flex-grow">
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
}