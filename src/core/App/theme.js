const colorNames = {
  white: "#FFFFFF",
  porcelain: "#EFF2F3",
  mercury: "#E5E5E5",
  ironTransparent: "rgba(209,213,218,0.3)",
  whiteLilac: "#F8F7FC",
  anakiwa: "#9DE5FF",
  dodgerBlue: "#1E90FF",
  tropicalBlue: "#C3DDF9",
  scienceBlue: "#0066CC",
  blueStone: "#016162",
  mineShaftLigther: "rgba(50,50,50,0.5)",
  mineShaft: "#323232",
  doveGrey: "#6D6C6C",
  slateGrey: "#708090",
  shipCave: "#788BBA",
  tundora: "#4A4244",
  black: "#000000",
};

const common = {
  breakpoints: {
    mobileMax: 767,
    tabletVerticalMax: 991,
    tabletHorizontalMax: 1199,
  },
  boxShadow: "0px -2px 50px rgba(9,10,51,0.02), 0px 16px 58px rgba(9,10,51,0.03)",
  borderRadiusSmall: "4px",
};

export const themeLight = {
  ...common,
  colors: {
    primary: colorNames.scienceBlue,
    textPrimary: colorNames.mineShaft,
    site: {
      background: colorNames.whiteLilac,
      text: colorNames.slateGrey,
    },
    buttonLink: {
      text: colorNames.white,
      border: colorNames.ironTransparent,
      shadow: colorNames.anakiwa,
    },
    boxBackGround: colorNames.white,
    headerLine: colorNames.mercury,
    tile: {
      border: colorNames.porcelain,
      borderHover: colorNames.tropicalBlue,
      header: colorNames.scienceBlue,
    },
    themeSwitch: {
      background: colorNames.mercury,
      icon: colorNames.white,
    },
  },
};

export const themeDark = {
  ...common,
  colors: {
    primary: colorNames.dodgerBlue,
    textPrimary: colorNames.white,
    site: {
      background: colorNames.mineShaft,
      text: colorNames.white,
    },
    buttonLink: {
      text: colorNames.white,
      border: colorNames.ironTransparent,
      shadow: colorNames.shipCave,
    },
    boxBackGround: colorNames.mineShaftLigther,
    headerLine: colorNames.tundora,
    tile: {
      border: colorNames.tundora,
      borderHover: colorNames.blueStone,
      header: colorNames.white,
    },
    themeSwitch: {
      background: colorNames.doveGrey,
      icon: colorNames.mineShaft,
    },
  },
};
