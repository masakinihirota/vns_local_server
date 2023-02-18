/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // using `app` directory:
    // './app/**/*.{js,ts,jsx,tsx}',
    // './pages/**/*.{js,ts,jsx,tsx}',
    // './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false, // リセットCSSの無効化
  },
  important: '#__next', // 全てのクラスセレクタの先頭に '#app' または '#__next'を追加する
  plugins: [],
};
