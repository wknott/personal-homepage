const breakpoint = {
  mobileMax: 767,
  iPad: 1023,
  desktopHD: 1366,
};

const colorNames = {
  scienceBlue: "#0366D6",
  dodgerBlue: "#2188FF",
  anakiwa: "#8CC2FF",
  mineShaft: "#252525",
  lighterMineShaft: "#313131",
  slateGray: "#6E7E91",
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  mercury: "#E5E5E5",
  shipCove: "#6D93BE",
  doveGray: "#6D6D6D",
  shipGray: "#363537",
  tundora: "#414141",
  tropicalBlue: "#CDE0F7",
  wedgeWood: "#4A73A2",
  azure: "#35669E",
};

export const lightTheme = {
  color: {
    primary: colorNames.scienceBlue,
    body: colorNames.whiteLilac,
    text: colorNames.slateGray,
    link: {
      text: colorNames.white,
      shadow: colorNames.anakiwa,
    },
    themeButton: {
      iconWrapper: colorNames.mercury,
      icon: colorNames.white,
    },
    secondaryText: colorNames.slateGray,
    background: colorNames.slateGray,
    buttonBackground: colorNames.mercury,
    sectionBackground: colorNames.white,
    divider: colorNames.mercury,
    tileActiveBorder: colorNames.tropicalBlue,
    projectTitle: colorNames.scienceBlue,
    linkUnderline: colorNames.tropicalBlue,
  },
  breakpoint
};

export const darkTheme = {
  color: {
    primary: colorNames.dodgerBlue,
    body: colorNames.mineShaft,
    text: colorNames.white,
    link: {
      text: colorNames.white,
      shadow: colorNames.shipCove,
    },
    themeButton: {
      iconWrapper: colorNames.doveGray,
      icon: colorNames.mineShaft,
    },
    secondaryText: colorNames.white,
    background: colorNames.shipGray,
    buttonBackground: colorNames.doveGray,
    sectionBackground: colorNames.lighterMineShaft,
    divider: colorNames.tundora,
    tileActiveBorder: colorNames.azure,
    projectTitle: colorNames.white,
    linkUnderline: colorNames.wedgeWood,
  },
  breakpoint
};