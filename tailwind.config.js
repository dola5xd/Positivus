/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand_1: "#B9FF66",
        brand_2: "#191A23",
        brand_3: "#F3F3F3",
      },
      animation: {
        Logo: "Logo 20s ease infinite",
        Logo_Spin: "SpinLogo 15s linear infinite",
      },
      keyframes: {
        Logo: {
          "0%, 20%, 50%, 70%, 100%": {
            transform: "translateX(0)",
          },
          "10%": {
            transform: "translateX(-110%)",
          },
        },
        SpinLogo: {
          "50%": {
            rotate: "1turn",
          },
        },
      },
      screens: {
        Tablet: "426px",
        Laptops: "1024px",
      },
    },
  },
  plugins: [],
};
