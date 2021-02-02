import { theme } from "../../theme";

export const buttonBase = {
  border: "none",
  transition: "0.3s",
  cursor: "pointer",
  "&:focus": {
    outline: 0,
  },
};

export const buttonHover = {
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
};

export const primaryButton = {
  height: "40px",
  width: "200px",
  padding: theme.spacing,
  fontSize: theme.fontSize.buttonSmall,
  fontWeight: theme.fontWeight.bold,
  textTransform: "uppercase",
  borderRadius: theme.buttonBorderRadius,
  transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
};

export const gradientButtonRed = {
  color: theme.palette.backgroundLight,
  backgroundImage: "linear-gradient(to right, #DD5E89 0%, #F7BB97 100%)",
  "&:hover": {
    opacity: "0.6",
  },
};

export const gradientButtonGreen = {
  color: theme.palette.backgroundLight,
  backgroundImage: "linear-gradient(to right, #2BC0E4 0%, #EAECC6 100%)",
  "&:hover": {
    opacity: "0.6",
  },
};

export const gradientButtonBlue = {
  color: theme.palette.backgroundLight,
  backgroundImage: "linear-gradient(to right, #7474BF 0%, #348AC7 100%)",
  "&:hover": {
    opacity: "0.6",
  },
};
