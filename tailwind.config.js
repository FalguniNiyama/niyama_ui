/** @type {import('tailwindcss').Config} */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Import the path module

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'vardan': ['Vardan', 'sans-serif'], // Use the actual font name
      },
      colors: {
        // Define your custom colors here
        primary: '#bbdebf',        //  Blue - 100
        primary400: '#42A5F5',        //  Blue - 400
        secondary: '#6c757d',      // Gray
        secondary300: '#dee2e6',    // Gray - 300
        secondary600: '#808080',      // Gray - 600
        backgroundcolor: '#006F59',   // cyan-green 
        darkgraycolor: '#333',       // Dark Gray
        whitecolor: '#FFFFFF',     // White
        blackcolor: '#000000',     // Black
        balckcolor40: '#2E2E2E',     // Black - 40%
        redcolor: '#FF0000',       // Red
        greencolor: '#008000',          // Green
        highlightcolor: '#B2BEB5'        // Ash Gray
      },
    },
  },
  plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'), // Configure the alias here
        },
    },
}

