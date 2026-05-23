export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Database Performance
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Visualize which database queries are{' '}
          <span className="text-[#58a6ff]">killing performance</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Connect your database, analyze query logs, and get interactive heatmaps showing slow queries, table hotspots, and exactly where to optimize. Built for backend developers and DBAs.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Monitoring — $29/mo
        </a>
        <div className="mt-16 grid grid-cols-3 gap-6 text-center">
          {[
            { label: 'Avg query slowdown detected', value: '12×' },
            { label: 'Tables analyzed per scan', value: '500+' },
            { label: 'Setup time', value: '< 5 min' },
          ].map((s) => (
            <div key={s.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl font-bold text-[#58a6ff] mb-1">{s.value}</div>
              <div className="text-sm text-[#8b949e]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Heatmap Preview */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
            <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
            <span className="ml-2 text-xs text-[#8b949e]">query_heatmap — production</span>
          </div>
          <div className="grid grid-cols-12 gap-1">
            {Array.from({ length: 84 }).map((_, i) => {
              const intensity = Math.random()
              const bg =
                intensity > 0.85
                  ? 'bg-red-500'
                  : intensity > 0.65
                  ? 'bg-orange-400'
                  : intensity > 0.4
                  ? 'bg-yellow-500'
                  : intensity > 0.2
                  ? 'bg-green-600'
                  : 'bg-[#21262d]'
              return <div key={i} className={`h-6 rounded-sm ${bg} opacity-80`}></div>
            })}
          </div>
          <div className="flex justify-between mt-3 text-xs text-[#8b949e]">
            <span>Low load</span>
            <span className="text-[#58a6ff] font-semibold">3 critical queries detected</span>
            <span>High load</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited database connections',
              'Real-time query heatmaps',
              'Table hotspot detection',
              'Continuous background monitoring',
              'Slack & email alerts',
              'Query optimization suggestions',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which databases are supported?',
              a: 'PostgreSQL, MySQL, and MariaDB are fully supported. MongoDB support is coming soon.',
            },
            {
              q: 'How does the heatmap work?',
              a: 'We connect to your database query logs, parse execution times and table access patterns, then render an interactive heatmap so you can instantly spot bottlenecks.',
            },
            {
              q: 'Is my data secure?',
              a: 'We only read query metadata — never your actual data. All connections use TLS and credentials are encrypted at rest.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Database Query Heatmap. All rights reserved.
      </footer>
    </main>
  )
}
