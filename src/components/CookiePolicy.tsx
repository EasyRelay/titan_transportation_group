import { Link } from 'react-router';
import ScrollToTop from './ScrollToTop';

const CookiesPolicy = () => {
    return (
        <div className="min-h-screen  text-white bg-titan-50 font-inter">
            <ScrollToTop/>
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto bg-gradient-to-tl from-titan-100 via-titan-800 to-titan-950 rounded-3xl shadow-2xl p-10">
                        <Link
                            to="/"
                            className="inline-flex items-center text-titan-500 hover:text-white transition mb-8 text-sm font-medium"
                        >
                            ← Back to Home
                        </Link>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-titan-50 to-titan-500 bg-clip-text text-transparent mb-12">
                            Cookie Policy
                        </h1>

                        <section className="space-y-6 text-gray-100 prose prose-invert prose-lg max-w-none">
                            <p className="text-white text-xl">
                                This Cookie Policy explains how Titan Transport Group LLC (“we,” “our,” or “us”) uses cookies and similar technologies when you visit our website or use our services, including tools integrated with third-party platforms such as RingCentral.
                            </p>

                            <h2>1. What Are Cookies?</h2>
                            <p>
                                Cookies are small text files stored on your device when visiting a site. They enhance your experience by remembering settings, enabling features, and offering insights.
                            </p>

                            <h2>2. Types of Cookies We Use</h2>
                            <ul className="list-disc pl-6 space-y-2 marker:text-blue-400">
                                <li><strong>Essential:</strong> Core functionalities like login and security.</li>
                                <li><strong>Functional:</strong> Save user preferences.</li>
                                <li><strong>Analytics:</strong> Track usage anonymously.</li>
                                <li><strong>RingCentral:</strong> For communication tools.</li>
                                <li><strong>Third-Party:</strong> Services like Google Maps, reCAPTCHA.</li>
                            </ul>

                            <h2>3. Why We Use Cookies</h2>
                            <ul className="list-disc pl-6 space-y-2 marker:text-blue-400">
                                <li>Ensure smooth functionality</li>
                                <li>Customize experiences</li>
                                <li>Performance insights</li>
                                <li>Support integrations</li>
                                <li>Enhance security</li>
                            </ul>

                            <h2>4. How to Manage Cookies</h2>
                            <p>Manage cookie preferences via your browser settings:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-blue-400">
                                <li>Google Chrome</li>
                                <li>Mozilla Firefox</li>
                                <li>Safari</li>
                                <li>Microsoft Edge</li>
                            </ul>
                            <p className="italic text-sm text-white">
                                Note: Disabling essential cookies may affect core functionality.
                            </p>

                            <h2>5. Updates to This Policy</h2>
                            <p>
                                We may revise this policy occasionally. Updates will be posted here. Continued use implies consent to changes.
                            </p>

            
                            <h2>6. Contact Us</h2>
                            <p>If you have any questions, contact us at:</p>

                            <div className="bg-black/20 p-6 rounded-xl border border-white/10 mt-4 text-white text-sm">
                                <p className="font-semibold mb-1">Titan Transport Group LLC</p>
                                <p>135 Settlers Drive Naperville, IL 60565</p>
                                <p>Phone: (773) 7980895</p>
                                <p>Email: <a href="mailto:dispatch@247ttg.com" className="text-blue-400 hover:underline">dispatch@247ttg.com</a></p>
                            </div>
                            <p className="text-center text-white mt-12 text-xs italic">
                                Last Updated: July 30, 2025
                            </p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CookiesPolicy;
