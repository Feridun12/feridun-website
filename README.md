# Feridun Canselen website

React + Vite + React Router.

## Run it

1. Install Node.js (version 18 or newer) from https://nodejs.org
2. Open this folder in VS Code, then open the terminal (Ctrl+`)
3. Run:

   npm install
   npm run dev

4. Open the address it prints (usually http://localhost:5173)

## Build for hosting

   npm run build

The finished site is in the `dist` folder.

## Where things are

- src/App.jsx: all routes
- src/components: Layout, Navbar, BottomOptions
- src/pages: one file per page
- src/i18n/translations.js: all Turkish and English text
- src/context/LanguageContext.jsx: language switching
- src/index.css: all styles
