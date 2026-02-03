export default function About() {
    return (
        <div className="min-h-screen bg-white">
            <div className="bg-gray-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">Empowering Efficient Trade</h1>
                    <p className="text-xl max-w-3xl text-gray-300">
                        Our mission is to democratize advanced supply chain technology, making it accessible to enterprises and MSMEs alike.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        ProcureAI is a fast-paced team of engineers, supply chain experts, and data scientists.
                        We are passionate about solving the "black box" problem in procurement and logistics.
                    </p>
                    <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                        Founded with the vision of bringing transparency and speed to B2B commerce, we leverage cutting-edge AI
                        to automate the mundane and illuminate the complex.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ValueBox title="Speed" desc="We move fast and help our customers do the same." />
                        <ValueBox title="Transparency" desc="Honesty in pricing, process, and code." />
                        <ValueBox title="Security" desc="Your data is your most valuable asset. We protect it." />
                        <ValueBox title="Innovation" desc="Constantly pushing the boundaries of what's possible." />
                    </div>
                </div>
            </div>
        </div>
    );
}

function ValueBox({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="p-6 bg-gray-50 rounded-lg border">
            <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
            <p className="text-gray-600">{desc}</p>
        </div>
    );
}
