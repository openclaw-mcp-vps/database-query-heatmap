import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Database Query Heatmap — Visualize Slow Queries',
  description: 'Interactive heatmaps showing slow queries, table hotspots, and optimization opportunities for backend developers and DBAs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bd250584-1991-4ae2-b02f-2f6f932f6bdc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
