const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001F",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      boxshadow: {
        black: "1px 1px 0 #000",
        white: "1px 1px 0 #fff",
      },
    },
  },
};

export default config;
