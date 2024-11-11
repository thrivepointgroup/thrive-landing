// pages/portfolio.js
import Image from 'next/image';
import { portfolio } from '../portfolio';

export default function Ventures() {
    // Sort portfolio alphabetically by name
    const sortedPortfolio = [...portfolio].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-4xl font-bold mb-8">Ventures</h2>

            <div className="space-y-8 text-lg">
                <p>
                    Thrive invests in and advises early stage startup companies. We invest at Pre Seed, Seed,
                    and Series A. Our team has worked with hundreds of early stage companies both as an investor,
                    advisor and founder. We invest both directly and through syndicates.
                </p>

                <div>
                    <h3 className="text-xl font-bold mb-4">Investment Philosophy</h3>
                    <p>
                        Our investment process and philosophy is very simple: we have an intense focus on the who
                        (the founders) and only invest in "high-beta" ideas (high upside, usually with lots of risk).
                        We understand that most startups fail, and we're here for the journey. We will typically
                        invest after one, maybe two meetings maximum. We invest between $10k-100k per deal. We're
                        comfortable investing at the "idea on a napkin" stage if the founders are right.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-4">Partnership Approach</h3>
                    <p className="mb-4">
                        Our approach to partnership is simple: stay out of the way unless we're needed.
                        We will make ourselves available any time of day or night, but unless you decide you need us,
                        we won't bother you.
                    </p>
                    <p className="mb-4">
                        We will make intros and connections to customers, employees, and capital, but when it comes
                        to portfolio support believe that the reason we invested in founders is because the founders
                        themselves are the most capable at doing those roles that many big "full-stack" venture firms
                        will sell you as add-ons (especially when it comes to hiring and building product). We find
                        the best founders prefer this approach to partnership too. It's pretty common for us to be
                        one of the smaller checks in the round, but introduce companies to investors who ultimately
                        lead the round.
                    </p>
                    <p>
                        Oftentimes we will act as an advisor to the companies we invest in. Our approach is to
                        provide insight, not prescriptions, to help founders make better decisions. We believe that
                        ultimately the founder has the most data on any given situation, so they need to be the one
                        making the final call. Most commonly our advice comes in the shape of "here is what we know
                        from xyz experience, but ultimately it's your call and you should trust your gut on this".
                        Sometimes we will just say "we don't know, but we can help you find someone who has a better
                        perspective on this", depending on if we've seen similar situations play out.
                    </p>
                </div>

                <div className="space-y-4">
                    <p>
                        If you'd like to pitch us, shoot an email to{' '}
                        <a href="mailto:carl@thrivepointgroup.com" className="text-blue-600 hover:text-blue-800">
                            carl@thrivepointgroup.com
                        </a>
                        {' '}with an initial blurb and a deck if you have one.
                    </p>
                </div>

                <h2 className="text-3xl font-bold mb-2">Portfolio</h2>

                <p className="mt-2">
                    All investments listed here are either direct or through a syndicate. There may be investments omitted from this page.
                </p>

                <div className="my-12 border-b border-gray-200" />

                {sortedPortfolio.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sortedPortfolio.map((company) => (
                            <a
                                key={company.name}
                                href={company.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block aspect-square relative cursor-pointer transition-shadow hover:shadow-lg"
                            >
                                <div className="absolute inset-0 bg-white">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={company.image}
                                            alt={company.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
                                    <h3 className="font-bold text-lg mb-1 text-white">
                                        {company.name}
                                    </h3>
                                    <p className="text-sm text-gray-200">
                                        {company.description}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                ) : (
                    <>
                        <div className="my-8 border-b border-gray-200" />
                        <div className="text-center">
                            <p className="text-2xl font-bold">Portfolio Coming Soon!</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}