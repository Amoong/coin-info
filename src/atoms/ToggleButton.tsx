/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
  isChecked: boolean;
  onClick: () => void;
  value1: string;
  value2: string;
}

const toggleButtonCss = css`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

function ToggleButton(props: Props) {
  return (
    <button css={toggleButtonCss} onClick={props.onClick}>
      {props.isChecked ? props.value1 : props.value2}
    </button>
  );
}

export default ToggleButton;
