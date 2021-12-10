/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ThemeButton from "molecules/ThemeButton";

interface Props {
  isLightTheme: boolean;
  setIsLightTheme: (value: boolean) => void;
}

const navbarCss = css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

function Navbar(props: Props) {
  return (
    <nav css={navbarCss}>
      <ThemeButton isLightTheme={props.isLightTheme} setIsLightTheme={props.setIsLightTheme} />
    </nav>
  );
}

export default Navbar;
