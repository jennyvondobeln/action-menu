import React from "react";
import { useFela } from "react-fela";
import PropTypes from "prop-types";
import {linkBaseStyles} from "./LinkBaseStyles";

const LinkBase = ({ children, customStyle, ...rest }) => {
  const { css } = useFela();

  return (
    <a {...rest} className={css([linkBaseStyles, customStyle])}>
      {children}
    </a>
  );
};
export default LinkBase;

LinkBase.propTypes = {
  children: PropTypes.node,
};
