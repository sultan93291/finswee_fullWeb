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
        sixHundred: "600px",
        sixNinetyOne: "691px",
        threeFoutyFour: "344px",
        one: "1px",
        fiveOEight: "508px",
        threeOneOne: "311px",
        sixtyFour: "64px",
        twoEightyFour: "284px",
      },
      maxWidth: {
        maxWidth: "1280px",
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
        threeTwentySeven: "327px",
        eightFourtyThree: "843px",
        sixTwentyFour: "624px",
        threeNintySix: "396px",
        FourOFive: "405px",
        fiveEightyTwo: "582px",
        fourSixtyFour: "464px",
        sixThirty: "630px",
        fiveNinetyFive: "595px",
        fourEightyFour: "484px",
        fiveOneFive: "515px",
        twoSeventyTwo: "272px",
        sixTwentyThree: "623px",
        sixThirty: "630px",
        twoNintySix: "296px",
        fourOSix: "406px",
        sevenThirtyThree: "733px",
        thousandSixtyEight: "1068px",
        nineFiftyFive: "952px",
        eightFourtyTwo: "842px",
        eightThirtySeven: "837px",
        fourSeventySeven: "477px",
        thousandTwoZeroeight: "1280px",
        nineFourtyNine: "949px",
        thousandSixtyEight: "1061px",
        twoFiftyFour: "254px",
      },
      padding: {
        navbarPadding: "320px",
        footerSectionPadding: "100px",
        yellowBoxPadding: "18px",
        fiftySix: "56px",
        seventySix: "76px",
        sixtyTwo: "62px",
        fiftyFive: "50px",
        sixtyNine: "69px",
        seventySix: "76.5px",
        ninetyTwo: "92px",
        sixteen: "16px",
      },
      margin: {
        footerSectionMargin: "158px",
        yellowboxLeft: "37px",
        TwoFiftySeven: "257px",
        threeOneTwo: "312px",
        eighttyNine: "89px",
        expand: "-126px",
        collpase: "-32px",
        hundredTwentyNine: "129px",
        CommonMargin: "320px",
        oneZeroEight: "108px",
        thirtyTwo: "32px",
        twoTwenty: "220px",
      },

      gap: {
        navMenuGap: "48px",
        logoparaGap: "22px",
        twentyFive: "25px",
        logoBoxGap: "86px",
        FooterSec: "10px",
        fourteen: "14px",
        twentyEight: "28px",
        twentySix: "28px",
        eighty: "60px",
        hundrenanTen: "110px",
        hundredThirtySix: "136px",
        sixty: "60px",
        oneFourty: "140px",
        thirty: "30px",
        fifty: "50px",
        seventySix: "76px",
        thirtyFour: "34px",
        twentySix: "26px",
        fiftyThree: "53px",
        twenty: "20px",
        ninetySix: "96px",
        sixtyFour: "64px",
        six: "6px",
      },

      borderRadius: {
        navbarBtnRadius: "41px",
      },
      borderWidth: {
        NavbarBtnBorder: "2px",
        onePointFive: "1.5px",
        one: "1px",
      },
      borderColor: {
        NavbarBorderColor: "rgba(244, 246, 252, 0.20)",
      },
      colors: {
        Blue: "#1C1E53",
        royalBlue: "#2405F2",
        navLinkTxtColor: "#BBBBCB",
        yellow: "#FCD980",
        DarkBlue: "#282938",
        black: "#1B1C2B",
        royalBlue: "#2405F2",
        Gray: "#F4F6FC",
        blue_linear: "rgba(28, 30, 83, 0.6)",
        offWhite: "#ECECF1",
        fadeWhite: "#FFFFFF0D",
        accent: "#EEF4FA",
        SBlack: "#1D2130",
        green: "#97DAAD",
        lightYellow: "#FFFFF0",
        creamWhite: "rgba(0, 0, 0, 0.12)",
      },
      fontFamily: {
        Poppins: "'Poppins', sans-serif",
        manrope: "'Manrope', sans-serif",
      },
      fontSize: {
        navLink: "16px",
        Heading5: "18px",
        heading2: "48px",
        fiftyFour: "54px",
        thirtyTwo: "32px",
        thirtyEight: "38px",
      },
      lineHeight: {
        SixtyFour: "64px",
        seventyFour: "74px",
        fourtyEight: "48px",
        fiftySix: "56px",
      },
      opacity: {
        paraOPacity: "0.8",
      },
    },
  },
  plugins: [],
};
