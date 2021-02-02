import React, { useState, createRef, useEffect } from "react";
import ActionMenu from "../ActionMenu/ActionMenu";
import { useFela } from "react-fela";
import useOutsideClick from "../../helpers/useOutsideClickHook";
import ButtonBase from "../ButtonBase/ButtonBase";
import { primaryButton } from "../ButtonBase/ButtonBaseStyles";
import "react-popper-tooltip/dist/styles.css";
import { usePopper } from "react-popper";
import { menuWrapper } from "./ActionMenuWrapperStyles";

const ActionMenuWrapper = ({ menuItems, buttonColor, menuPosition }) => {
  const { css } = useFela();
  const [isOpen, setIsOpen] = useState(false);

  const ref = createRef();
  const [toolTipRef, setTooltipRef] = useState(null);
  const [triggerRef, setTriggerRef] = useState(null);

  const { styles, attributes } = usePopper(triggerRef, toolTipRef, {
    placement: menuPosition,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 10],
        },
      },
    ],
  });

  useEffect(() => {
    const handleKeyDown = ({ key }) => {
      if (key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useOutsideClick(ref, () => {
    if (isOpen) setIsOpen(false);
  });

  const showMenufunc = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={css(menuWrapper)}>
      <ButtonBase
        ref={setTriggerRef}
        customStyle={[buttonColor, primaryButton]}
        onClick={showMenufunc}
        aria-label={isOpen ? "Close" : "Open"}
      >
        {isOpen ? "Close menu" : "Show menu"}
      </ButtonBase>

      {isOpen && (
        <div ref={setTooltipRef} style={styles.popper} {...attributes.popper}>
          <ActionMenu ref={ref} menuItems={menuItems} />
        </div>
      )}
    </div>
  );
};
export default ActionMenuWrapper;


