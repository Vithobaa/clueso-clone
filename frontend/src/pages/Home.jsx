import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center px-8 py-5">
        <div className="flex items-center gap-2 text-xl font-bold">
          <span className="text-pink-500">◼</span> Clueso
        </div>

        <div className="hidden md:flex gap-8 text-sm text-gray-600">
          <span>Product</span>
          <span>Resources</span>
          <span>Pricing</span>
          <span>Careers</span>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm">
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-black text-white px-4 py-2 rounded-md text-sm"
          >
            Start Free Trial
          </Link>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-8 py-24">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 opacity-30 blur-3xl" />

        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Product videos <br />
              <span className="text-gray-400">in minutes with AI</span>
            </h1>

            <p className="mt-6 text-gray-600 max-w-md text-lg">
              Transform raw screen recordings into stunning videos and
              documentation automatically.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/signup"
                className="bg-pink-500 hover:bg-pink-600 transition text-white px-6 py-3 rounded-lg"
              >
                Start Free Trial
              </Link>

              <button className="border border-pink-300 text-pink-500 px-6 py-3 rounded-lg">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SOCIAL PROOF ================= */}
      <section className="py-12 border-t border-b">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10 text-gray-400 text-sm">
          <span>airbnb</span>
          <span>stripe</span>
          <span>notion</span>
          <span>shopify</span>
          <span>figma</span>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Everything you need to create product videos
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Screen to Video",
                desc: "Convert raw recordings into polished videos automatically.",
              },
              {
                title: "AI Documentation",
                desc: "Generate step-by-step guides alongside videos.",
              },
              {
                title: "Instant Insights",
                desc: "Understand user feedback with AI-powered summaries.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="py-28 px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-5xl font-semibold tracking-tight">
            Pricing that Scales
          </h2>
          <p className="mt-4 text-gray-600">
            Every plan includes Clueso’s full creative power — upgrade only when your team grows.
          </p>

          <div className="mt-8 inline-flex bg-gray-100 rounded-lg p-1 text-sm">
            <button className="px-4 py-2 bg-white rounded-md shadow">
              Bill Yearly <span className="text-xs text-gray-400 ml-1">Save 20%</span>
            </button>
            <button className="px-4 py-2 text-gray-500">
              Bill Monthly
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            <PricingCard
              title="Free"
              price="$0"
              subtitle="For exploring and evaluating"
              button="Start Free Trial"
              features={[
                "2 users",
                "15 mins total video exports",
                "15 article exports",
                "Export videos up to 1080p",
              ]}
            />

            <PricingCard
              title="Starter"
              price="$120/month"
              subtitle="For teams starting out"
              billed="Billed yearly"
              button="Start Free Trial"
              features={[
                "2 users",
                "6 hours video exports/year",
                "360 article exports/year",
                "Watermark-free exports",
                "Export videos up to 2K",
              ]}
            />

            <PricingCard
              title="Growth"
              price="$200/month"
              subtitle="Perfect for growing teams"
              billed="Billed yearly"
              button="Start Free Trial"
              highlight
              features={[
                "4 users",
                "12 hours video exports/year",
                "720 article exports/year",
                "Watermark-free exports",
                "Export videos up to 4K",
              ]}
            />

            <PricingCard
              title="Enterprise"
              price="Custom"
              subtitle="For orgs operating at scale"
              button="Book a Demo"
              darkButton
              features={[
                "Custom number of users",
                "Custom export limits",
                "Watermark-free exports",
                "Enterprise-grade security",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-12 px-8 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-sm text-gray-500">
          <span>© 2025 Clueso Clone</span>
          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ================= PRICING CARD ================= */

function PricingCard({
  title,
  subtitle,
  price,
  billed,
  button,
  features,
  highlight,
  darkButton,
}) {
  return (
    <div
      className={`rounded-2xl border p-8 space-y-6 ${
        highlight ? "border-pink-400 shadow-lg" : "border-gray-200"
      }`}
    >
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>

      <div>
        <div className="text-4xl font-semibold">{price}</div>
        {billed && <p className="text-xs text-gray-400 mt-1">{billed}</p>}
      </div>

      <button
        className={`w-full py-2 rounded-lg text-sm font-medium ${
          darkButton
            ? "bg-black text-white"
            : highlight
            ? "bg-pink-500 text-white"
            : "border border-pink-400 text-pink-500"
        }`}
      >
        {button}
      </button>

      <ul className="space-y-3 text-sm text-gray-600">
        {features.map((f, i) => (
          <li key={i} className="flex gap-2">
            <span>✔</span> {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
