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
}

export const lightTheme = {
  color: {
    primary: colorNames.scienceBlue,
    blueShadow: colorNames.anakiwa,
    body: colorNames.whiteLilac,
    text: colorNames.mineShaft,
    secondaryText: colorNames.slateGray,
    toggleBorder: colorNames.white,
    background: colorNames.slateGray,
    white: colorNames.white,
    buttonBackground: colorNames.mercury,
    sectionBackground: colorNames.white,
    divider: colorNames.mercury,
    tileActiveBorder: colorNames.tropicalBlue,
    projectTitle: colorNames.scienceBlue,
    linkUnderline: colorNames.tropicalBlue,
    linkUnderlineHover: colorNames.scienceBlue,
    themeButtonIcon: colorNames.white,
  },
  breakpoint
}



export const darkTheme = {
  color: {
    primary: colorNames.dodgerBlue,
    blueShadow: colorNames.shipCove,
    body: colorNames.mineShaft,
    text: colorNames.white,
    secondaryText: colorNames.white,
    toggleBorder: colorNames.white,
    background: colorNames.shipGray,
    white: colorNames.white,
    buttonBackground: colorNames.doveGray,
    sectionBackground: colorNames.lighterMineShaft,
    divider: colorNames.tundora,
    tileActiveBorder: colorNames.azure,
    projectTitle: colorNames.white,
    linkUnderline: colorNames.wedgeWood,
    linkUnderlineHover: colorNames.dodgerBlue,
    themeButtonIcon: colorNames.mineShaft,
  },
  breakpoint
}