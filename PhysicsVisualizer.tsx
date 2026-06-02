@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500;600;700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-display: 'Space Grotesk', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  --color-gore-bg: #09080d;
  --color-gore-dark: #121016;
  --color-gore-card: #191622;
  --color-gore-border: #2e263f;
  --color-neon-purple: #c084fc;
  --color-neon-violet: #a855f7;
  --color-neon-pink: #f43f5e;
}

@layer base {
  body {
    background-color: var(--color-gore-bg);
    color: #f3f4f6;
    font-family: var(--font-sans);
  }
}

.glow-purple {
  box-shadow: 0 0 15px rgba(168, 85, 247, 0.25);
}

.glow-purple-lg {
  box-shadow: 0 0 25px rgba(168, 85, 247, 0.4);
}

.glow-danger {
  box-shadow: 0 0 15px rgba(244, 63, 94, 0.35);
}

.glow-success {
  box-shadow: 0 0 15px rgba(34, 197, 94, 0.35);
}

/* Custom Webkit scrollbar for technical scrollable areas */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: #121016;
}
::-webkit-scrollbar-thumb {
  background: #2e263f;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #a855f7;
}

