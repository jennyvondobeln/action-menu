import { theme } from "../../theme";

export const menuContainerStyle = {
  padding: "4px",
  backgroundColor: theme.palette.paper,
  boxShadow: theme.boxShadow,
  minWidth: "140px",
  maxWidth: "300px",
  borderRadius: "4px",
};
export const listStyle = {
  padding: 0,
  margin: 0,
  display: "flex",
  backgroundColor: theme.palette.paper,
  flexDirection: "column",
};

export const separator = {
  display: "flex",
  border: `1px solid ${theme.palette.primary.light}`,
};


