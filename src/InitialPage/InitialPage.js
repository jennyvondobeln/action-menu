import React, { useState, createRef } from "react";
import ActionMenu from "../components/ActionMenu/ActionMenu";
import { useFela } from "react-fela";
import { actionMenuMock1 } from "../mockfiles/mocks";
import { gradientButtonOne } from "../components/ButtonBase/ButtonBaseStyles";
import useOutsideClick from "../helpers/useOutsideClickHook";
import { InitialPageStyles } from "./InitialPageStyles";
import ButtonBase from "../components/ButtonBase/ButtonBase";
import { usePopperTooltip } from "react-popper-tooltip";
import "react-popper-tooltip/dist/styles.css";

const InitialPage = () => {
  const { css } = useFela();
  const [isOpen, setIsOpen] = useState(false);

  const ref = createRef();

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
  } = usePopperTooltip();

  useOutsideClick(ref, () => {
    if (isOpen) setIsOpen(false);
  });

  const showMenufunc = () => {
    //e.preventDefault(); behövs detta?
    setIsOpen(!isOpen);
  };

  return (
    <div className={css(InitialPageStyles)}>
      <ButtonBase
        ref={setTriggerRef}
        customStyle={gradientButtonOne}
        onClick={showMenufunc}
        aria-label={isOpen ? "Close" : "Open"}
      >
        {isOpen ? "Close menu" : "Show menu"}
      </ButtonBase>

      {isOpen && (
        <span
          ref={setTooltipRef}
          {...getTooltipProps({ className: "tooltip-container" })}
        >
          <ActionMenu ref={ref} menuItems={actionMenuMock1} />
          <div {...getArrowProps({ className: "tooltip-arrow" })} />
        </span>
      )}
    </div>
  );
};
export default InitialPage;
