import React, { Fragment } from "react";
import styled, { css } from "styled-components";

import Arrow from "./img/SliderArrow.svg";

const Btn = styled.div`
  width: 15px;
  height: 30px;
  cursor: pointer;
  user-select: none;
  position: absolute;
  z-index: 100;
  top: 50%;
  transform: translateY(-50%);
  bottom: 0;
  background: url(${Arrow}) center no-repeat;

  ${props =>
    props.left &&
    css`
      left: 60px;
      transform: rotate(180deg);
    `}

  ${props =>
    props.right &&
    css`
      right: 60px;
    `}
`;

function Buttons(props) {
  const { index, total, loop, prevHandler, nextHandler } = props;
  return (
    <Fragment>
      {(loop || index !== 0) && <Btn left onClick={prevHandler} />}
      {(loop || index !== total - 1) && <Btn right onClick={nextHandler} />}
    </Fragment>
  );
}

export default Buttons;
