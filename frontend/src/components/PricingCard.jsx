function PricingCard({
  title,
  subtitle,
  price,
  billed,
  button,
  features,
  highlight,
  darkButton
}) {
  return (
    <div
      className={`rounded-2xl border p-8 space-y-6 ${
        highlight
          ? "border-pink-400 shadow-lg"
          : "border-gray-200"
      }`}
    >
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>

      <div>
        <div className="text-4xl font-semibold">{price}</div>
        {billed && (
          <p className="text-xs text-gray-400 mt-1">{billed}</p>
        )}
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
