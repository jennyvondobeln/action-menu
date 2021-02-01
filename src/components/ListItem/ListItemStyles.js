import { theme } from "../../theme";

export const listItemStyle = () => ({
  margin: "4px",
  fontSize: theme.fontSize.body1,
  minHeight: "40px",
  backgroundColor: theme.palette.paper,
  display: "flex",
  listStyle: "none",
  alignItems: "center",
});

export const menuLinkStyle = () => ({
  padding: theme.spacing,
  display: "flex",
  alignItems: "center",
  minHeight: "40px",
  width: "100%",
   color: "inherit",
   "&:hover":{
       backgroundColor: theme.palette.primary.light,
   }
})

export const menuIconStyle = () => ({
  width: "18px",
  height: "18px",
  marginRight: "8px",
});

export const summaryStyle = () => ({
  fontWeight: 500,
  lineHeight: 1.6,
});

export const descriptionStyle = () => ({
  fontWeight: 300,
  color: theme.palette.primary.medium,
});
