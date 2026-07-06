/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Semantic tokens — resolve to CSS variables that swap per theme.
        base: 'var(--bg)',
        surface: 'var(--surface)',
        card: 'var(--card)',
        ink: 'var(--ink)', // strong headings
        body: 'var(--body)', // default text
        muted: 'var(--muted)', // secondary text
        faint: 'var(--faint)', // tertiary text
        line: 'var(--line)', // borders (includes alpha)
        panel: 'var(--panel)', // subtle fill
        panel2: 'var(--panel2)', // stronger fill
        // Brand accents stay constant across themes.
        accent: '#7c5cff',
        accent2: '#22d3ee',
        neon: '#a78bfa',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(124, 92, 255, 0.55)',
        'glow-cyan': '0 0 40px -12px rgba(34, 211, 238, 0.5)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 6s ease infinite',
      },
    },
  },
  plugins: [],
}
