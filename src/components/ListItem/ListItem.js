import React from "react";
import { useFela } from "react-fela";
import PropTypes from "prop-types";
import {
  listItemStyle,
  menuIconStyle,
  summaryStyle,
  descriptionStyle,
  menuLinkStyle,
} from "./ListItemStyles";
import LinkBase from "../LinkBase/LinkBase";

const ListItem = ({ icon, summary, description, link }) => {
  const { css } = useFela();
 

  return (
    <li className={css(listItemStyle)} aria-labelledby={summary + " link"}>
      <LinkBase href={link} target="blank" customStyle={menuLinkStyle}>
        {icon && <div className={css(menuIconStyle)}>{icon}</div>}
        <div className={css(summaryStyle)}>
          {summary}
          {description && (
            <div className={css(descriptionStyle)}>{description}</div>
          )}
        </div>
      </LinkBase>
    </li>
  );
};
export default ListItem;

ListItem.propTypes = {
  summary: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.element,
  link: PropTypes.string.isRequired,
};
