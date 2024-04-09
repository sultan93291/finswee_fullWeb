/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        navbar_Height: "92px",
        navbarBtnHeight: "60px",
        footerSecBoxheight: "95px",
        threeOneSix: "306px",
      },
      padding: {
        navbarPadding: "320px",
        footerSectionPadding: "100px",
        yellowBoxPadding: "18px",
        fiftySix: "56px",
      },
      colors: {
        Blue: "#1C1E53",
        navLinkTxtColor: "#BBBBCB",
        yellow: "#FCD980",
        DarkBlue: "#282938",
        black: "#1B1C2B",
        royalBlue: "#2405F2",
        Gray: "#F4F6FC",
        blue_linear: "rgba(28, 30, 83, 0.6)",
      },
      fontFamily: {
        Poppins: "'Poppins', sans-serif",
        manrope: "'Manrope', sans-serif",
      },
      fontSize: {
        navLink: "16px",
        Heading5: "18px",
        heading2: "48px",
      },
      gap: {
        navMenuGap: "48px",
        logoparaGap: "22px",
        twentyFive: "25px",
        logoBoxGap: "86px",
        FooterSec: "142px",
        fourteen: "14px",
        twentyEight: "28px",
        twentySix: "28px",
        eighty: "60px",
      },
      width: {
        NavbarBtn: "185px",
        paraWidth: "399px",
        Yellobox: "517px",
        fivesixtytwo: "562px",
        fouro_Five: "405px",
        sixO_fiftySix: "656px",
        threeO_three: "303px",
        threeOneThree: "313px",
        twoNintyThree: "293px",
        twoninety: "290px",
      },
      borderRadius: {
        navbarBtnRadius: "41px",
      },
      borderWidth: {
        NavbarBtnBorder: "2px",
      },
      borderColor: {
        NavbarBorderColor: "rgba(244, 246, 252, 0.20)",
      },
      opacity: {
        paraOPacity: "0.8",
      },
      margin: {
        footerSectionMargin: "158px",
        yellowboxLeft: "37px",
        TwoFiftySeven: "257px",
        threeOneTwo: "312px",
      },
      lineHeight: {
        SixtyFour: "64px",
      },
      maxWidth: {
        maxWidth: "1600px",
      },
    },
  },
  plugins: [],
};
