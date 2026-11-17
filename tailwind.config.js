/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        fintech: {
          bg: '#080c14',
          subtle: '#0f172a',
          surface: '#111827',
          surface2: '#162032',
          border: '#1e293b',
          borderHover: '#334155',
          accent: '#3b82f6',
          accentHover: '#2563eb',
          success: '#10b981',
          successSubtle: 'rgba(16, 185, 129, 0.12)',
          warning: '#f59e0b',
          warningSubtle: 'rgba(245, 158, 11, 0.12)',
          danger: '#ef4444',
          dangerSubtle: 'rgba(239, 68, 68, 0.12)',
          purple: '#8b5cf6',
          purpleSubtle: 'rgba(139, 92, 246, 0.12)',
          pink: '#ec4899',
          pinkSubtle: 'rgba(236, 72, 153, 0.12)',
          teal: '#14b8a6',
          tealSubtle: 'rgba(20, 184, 166, 0.12)',
          orange: '#f97316',
          orangeSubtle: 'rgba(249, 115, 22, 0.12)',
        }
      },
      boxShadow: {
        'fintech-card': '0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 2px 6px -1px rgba(0, 0, 0, 0.3)',
        'fintech-glow': '0 0 25px -5px rgba(59, 130, 246, 0.15)',
        'fintech-success-glow': '0 0 25px -5px rgba(16, 185, 129, 0.2)',
        'fintech-danger-glow': '0 0 25px -5px rgba(239, 68, 68, 0.2)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
