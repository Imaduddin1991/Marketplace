import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js,jsx,ts,tsx}", // Added this path for completeness
  ],
  theme: {
    extend: {
      colors: {

        dimpink: "#F9F1E7",

        pink:"#fff3e3",
        bgPink: "#FCF8F3",
        Npink: "#E97171",

        sky: "#2EC1AC",
 
        gold: "#B88E2F", // Custom text color

        bgGrey: "#F4F5F7",
        grey: "#9F9F9F",
        Linegrey: "#D9D9D9",
        ldGrey: "#898989",
        MGrey:"#333333",
        Silver: "#666666",

        Ldblack: "#3A3A3A",
        
        white: "#FFFFFF",

        background: "var(--background)", // CSS variable for background color
        foreground: "var(--foreground)", // CSS variable for foreground color
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins font family
        Montserrat:["Monotserrat"]


      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
