import React, { forwardRef }  from "react";
import { useFela } from "react-fela";
import { buttonHover, buttonBase } from "./ButtonBaseStyles";
import PropTypes from "prop-types";


const ButtonBase = forwardRef(({ children, customStyle, ...rest  }, ref) => {

  const { css } = useFela();

  return (
    <button ref={ref} className={css([buttonHover, buttonBase, customStyle])} {...rest}>
      {children}
    </button>
  );
});
export default ButtonBase;

ButtonBase.propTypes = {
  children: PropTypes.node,
};
