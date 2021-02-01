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
  padding: theme.spacing,
  fontSize: theme.fontSize.buttonBig,
  borderRadius: theme.buttonBorderRadius,
  backgroundColor: theme.palette.paper,
};

export const gradientButtonOne = {
  height: "40px",
  width: "200px",
  padding: theme.spacing,
  fontSize: theme.fontSize.buttonSmall,
  fontWeight: theme.fontWeight.bold,
  textTransform: "uppercase",
  borderRadius: theme.buttonBorderRadius,
  color: theme.palette.backgroundLight,
  backgroundImage:
    "linear-gradient(to right, #DD5E89 0%, #F7BB97 100%)",
};
