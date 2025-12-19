const actions = [
  { title: "Record screen", desc: "Turn a screen recording into a studio-style video" },
  { title: "Upload a video", desc: "Upload a recording and polish it with AI" },
  { title: "Upload a slide deck", desc: "Turn PPT or PDF into narrated video" },
];

export default function CreateActions() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-6">
      {actions.map((a, i) => (
        <div
          key={i}
          className="rounded-xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition"
        >
          <h3 className="font-semibold mb-2">{a.title}</h3>
          <p className="text-sm text-gray-400">{a.desc}</p>
        </div>
      ))}
      <div className="grid md:grid-cols-3 gap-4 mt-10">
  {["Cuts", "Auto-update", "Translator"].map(tool => (
    <div
      key={tool}
      className="rounded-lg bg-white/5 border border-white/10 p-4 text-sm"
    >
      <div className="font-medium">{tool}</div>
      <p className="text-gray-400 mt-1">
        AI-powered tool to enhance content
      </p>
    </div>
  ))}
</div>
<div className="mt-16 border border-white/10 rounded-xl h-64 flex items-center justify-center text-gray-400">
  No projects found
</div>

    </div>
  );
}
