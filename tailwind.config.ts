import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'lion': { DEFAULT: '#af9164', 100: '#241d13', 200: '#493b25', 300: '#6d5838', 400: '#91754b', 500: '#af9164', 600: '#bfa783', 700: '#cfbda2', 800: '#dfd3c1', 900: '#efe9e0' }, 
        'cosmic_latte': { DEFAULT: '#f7f3e3', 100: '#4a3f15', 200: '#947f2a', 300: '#cdb44f', 400: '#e2d499', 500: '#f7f3e3', 600: '#f9f6e9', 700: '#faf8ee', 800: '#fcfaf4', 900: '#fdfdf9' }, 
        'silver': { DEFAULT: '#b3b6b7', 100: '#232525', 200: '#464a4b', 300: '#696e70', 400: '#8e9294', 500: '#b3b6b7', 600: '#c2c5c6', 700: '#d1d3d4', 800: '#e1e2e2', 900: '#f0f0f1' }, 
        'barn_red': { DEFAULT: '#6f1a07', 100: '#160501', 200: '#2c0a03', 300: '#421004', 400: '#581506', 500: '#6f1a07', 600: '#b82b0c', 700: '#f14822', 800: '#f6856b', 900: '#fac2b5' }, 
        'bistre': { DEFAULT: '#2b2118', 100: '#080705', 200: '#110d0a', 300: '#19140e', 400: '#221a13', 500: '#2b2118', 600: '#634c38', 700: '#9c7858', 800: '#bfa58d', 900: '#dfd2c6' }
      },
    },
  },
  plugins: [],
}
export default config
