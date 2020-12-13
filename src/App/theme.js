const breakpoint = {
  mobileMax: 766,
  iPad: 1024,
  desktopHD: 1366,
};

export const lightTheme = {
  color: {
    mainBlue: "#0366D6",
    mainBlueFilter: "invert(24%) sepia(78%) saturate(5471%) hue-rotate(203deg) brightness(95%) contrast(98%)",
    blueShadow: "#8CC2FF",
    body: "#FBFBFE",
    text: "#252525",
    textFilter: "unset",
    secondaryText: "#6E7E91",
    toggleBorder: "#FFFFFF",
    background: "#6E7E91",
    white: "#FFFFFF",
    buttonBackground: "#E5E5E5",
    sectionBackground: "#FFFFFF",
    divider: "rgba(209, 213, 218, 0.3)",
    tileActiveBorder: "rgba(3, 102, 214, 0.2)",
  },
  breakpoint
}

export const darkTheme = {
  color: {
    mainBlue: "#2188FF",
    mainBlueFilter: "invert(47%) sepia(58%) saturate(4738%) hue-rotate(198deg) brightness(102%) contrast(101%)",
    blueShadow: "#6D93BE",
    body: "#252525",
    text: "#FFFFFF",
    textFilter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(103deg) brightness(106%) contrast(101%)",
    secondaryText: "#FFFFFF",
    toggleBorder: "#FFFFFF",
    background: "#363537",
    white: "#FFFFFF",
    buttonBackground: "rgba(54, 54, 54, 0.72)",
    sectionBackground: "rgba(54, 54, 54, 0.72)",
    divider: "rgba(209, 213, 218, 0.1)",
    tileActiveBorder: "rgba(3, 102, 214, 0.5)",
  },
  breakpoint
}