// pages/consulting.js
export default function Consulting() {
    const services = [
        {
            title: "Project Based Consulting",
            description: "Good for fixed-term projects and experiments. Typical engagement looks something like 2-6 weeks depending on the scope. We will do some select smaller projects depending on the team or company."
        },
        {
            title: "Embedded Team Member",
            description: "Sometimes we will embed with your team to help contribute code to your core codebase. We do this selectively as it's usually best to hire full-time engineers to do this work. In addition to the code we write, we work with your team to improve shipping speed and quality while optimizing processes."
        },
        {
            title: "Technical Interviewing and Screening",
            description: "Effectively screen technical engineering candidates. We've hired engineers at places like Coinbase, startups, and everywhere in between."
        },
        {
            title: "CTO as a Service",
            description: "Longer-term embedded role where we step in as acting CTO of the company. Usually the goal is to build out the initial V1 of the product and hire the technical team that will take the product forward."
        },
        {
            title: "Product and GTM Strategy",
            description: "Bespoke product and GTM advisory."
        }
    ];

    return (
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-4xl font-bold mb-8">Consulting</h2>

            <div className="mb-8 border-b border-gray-200" />

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Value Add</h2>
                <p className="text-lg mb-4">
                    Our primary value add is to ship high-quality, production-ready software very very fast.
                    We're technology agnostic, and will work with any tech stack or architecture. For every
                    project we deliver high-quality code and documentation that can be handed off, and can
                    be kept on retainer for ongoing support.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Philosophy</h2>
                <p className="text-lg mb-4">
                    We have been building software products for 10+ years. In that time we've led and managed
                    teams and seen many types of consulting arrangements. We've been around enough to know,
                    that the wrong consulting engagement can <strong>hurt, not help</strong> a company.
                </p>
                <p className="text-lg mb-4">
                    Especially when it comes to a companies core product and technology, you need to be careful
                    hiring temporary workers and having them work on those codebases. For that reason, we are
                    selective about which engagements we take, because we want to make sure we only help, not
                    hurt a company. We evaluate this on a case-by-case basis.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Services</h2>
                <div className="space-y-8">
                    {services.map((service) => (
                        <div key={service.title} className="border p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-lg">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Pricing</h2>
                <p className="text-lg">
                    Pricing is discussed on a case-by-case basis and the scope and involvement of the work.
                    We most commonly charge per-project, and not per-hour. Expect price that matches the quality of work.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Availability and Booking</h2>
                <p className="text-lg mb-6">
                    We evaluate projects on a rolling basis and only take 2-3 clients at a time depending
                    on availability.
                </p>
                <button
                    className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                    onClick={() => window.location.href = 'https://calendly.com/carl-thrivepointgroup/thrive-initial-consult'}
                >
                    Book Initial Consultation
                </button>
            </section>
        </div>
    );
}