import React from "react";
import { useFela } from "react-fela";
import {
  actionMenuMock1,
  actionMenuMock2,
  actionMenuMock3,
} from "../mockfiles/mocks";
import ActionMenuWrapper from "../components/ActionMenuWrapper/ActionMenuWrapper";
import { InitialPageStyles } from "./InitialPageStyles";
import {
  gradientButtonRed,
  gradientButtonGreen,
  gradientButtonBlue,
} from "../components/ButtonBase/ButtonBaseStyles";

const InitialPage = () => {
  const { css } = useFela();

  const variations = [
    {
      mock: actionMenuMock1,
      buttonType: gradientButtonRed,
      position: "left",
    },
    {
      mock: actionMenuMock2,
      buttonType: gradientButtonGreen,
      position: "right",
    },
    {
      mock: actionMenuMock3,
      buttonType: gradientButtonBlue,
      position: "top",
    },
  ];

  return (
    <div className={css(InitialPageStyles)}>
      {variations.map((item, i) => (
        <ActionMenuWrapper
          key={i}
          menuItems={item.mock}
          buttonColor={item.buttonType}
          menuPosition={item.position}
        />
      ))}
    </div>
  );
};
export default InitialPage;
