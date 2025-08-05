/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Mondish Font Family
        'mondish-black-italic': ['var(--font-mondish-black-italic)', 'serif'],
        'mondish-black': ['var(--font-mondish-black)', 'serif'],
        'mondish-bold-italic': ['var(--font-mondish-bold-italic)', 'serif'],
        'mondish-bold': ['var(--font-mondish-bold)', 'serif'],
        'mondish-regular-italic': ['var(--font-mondish-regular-italic)', 'serif'],
        'mondish-regular': ['var(--font-mondish-regular)', 'serif'],
        'mondish-light-italic': ['var(--font-mondish-light-italic)', 'serif'],
        'mondish-light': ['var(--font-mondish-light)', 'serif'],
        'mondish-thin-italic': ['var(--font-mondish-thin-italic)', 'serif'],
        'mondish-thin': ['var(--font-mondish-thin)', 'serif'],
        
        // Araboto Font Family
        'araboto-black': ['var(--font-araboto-black)', 'sans-serif'],
        'araboto-bold': ['var(--font-araboto-bold)', 'sans-serif'],
        'araboto-medium': ['var(--font-araboto-medium)', 'sans-serif'],
        'araboto-normal': ['var(--font-araboto-normal)', 'sans-serif'],
        'araboto-light': ['var(--font-araboto-light)', 'sans-serif'],
        'araboto-thin': ['var(--font-araboto-thin)', 'sans-serif'],
        
        // Roboto Font Family
        'roboto-black': ['var(--font-roboto-black)', 'sans-serif'],
        'roboto-bold': ['var(--font-roboto-bold)', 'sans-serif'],
        'roboto-medium': ['var(--font-roboto-medium)', 'sans-serif'],
        'roboto-regular': ['var(--font-roboto-regular)', 'sans-serif'],
        'roboto-light': ['var(--font-roboto-light)', 'sans-serif'],
        'roboto-thin': ['var(--font-roboto-thin)', 'sans-serif'],
        
        // Legacy/Shorthand aliases (for backward compatibility)
        'heading': ['var(--font-mondish)', 'serif'],
        'heading-italic': ['var(--font-mondish-italic)', 'serif'],
        'heading-light': ['var(--font-mondish-light-compat)', 'serif'],
        'body': ['var(--font-araboto)', 'sans-serif'],
        'sans': ['var(--font-araboto-normal)', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // New color palette
        'cream': '#F1E2D0',
        'warm-brown': '#946449', 
        'orange-red': '#D84B26',
        'teal': '#3C998F',
        'sage-green': '#627663',
        // Legacy colors (will be replaced gradually)
        'custom-teal': '#3C998F',
        'medium-sea-green': '#3C998F',
        'warm-beige': '#F1E2D0',
      },
    },
  },
  plugins: [],
}
