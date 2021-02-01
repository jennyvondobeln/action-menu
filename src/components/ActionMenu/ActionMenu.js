import React, { forwardRef } from "react";
import { useFela } from "react-fela";
import PropTypes from "prop-types";
import { menuContainerStyle, listStyle, separator } from "./ActionMenuStyles";
import ListItem from "../ListItem/ListItem";
import {LIST_TYPES} from "../../constants/menuConstants"


const ActionMenu = forwardRef(({ menuItems }, ref) => {
  const { css } = useFela();

  return (
    <div
      className={css(menuContainerStyle)}
      ref={ref}
      aria-label="dropdown-menu"
    >
      <ul className={css(listStyle)}>
        {menuItems.map((item, i) =>
          item.type === LIST_TYPES.SEPARATOR ? (
            <div key={i} className={css(separator)} />
          ) : (
            <ListItem
              key={i}
              summary={item.summary}
              icon={item.icon}
              link={item.link}
              description={item.description}
            />
          )
        )}
      </ul>
    </div>
  );
});
export default ActionMenu;

ActionMenu.propTypes = {
  menuItems: PropTypes.array.isRequired,
};
