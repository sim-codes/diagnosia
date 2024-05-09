import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveBottom: {
          to: {
            left: "100%",
            top: "100%",
            transform: "translate(-100%,-100%)",
          },
        },
        moveTop: {
          to: {
            right: "80%",
            bottom: "80%",
            transform: "translateX(-100%)",
          },
        },
      },
      animation: {
        'move-bottom': 'moveBottom 15s linear infinite alternate',
        'move-top': 'moveTop 15s linear infinite alternate',
      },
    },
  },
  plugins: [],
};
export default config;
