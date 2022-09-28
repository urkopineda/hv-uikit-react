import styled from "@emotion/styled";
import { themeVars, themeUtils } from "theme";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const Styled = styled("header")({
    display: "flex",
    padding: themeUtils.spacing(2),
    borderTopWidth: 4,
    borderTopColor: themeVars.colors.sema4,
    backgroundColor: themeVars.colors.atmo1,
  });

  return <Styled>{children}</Styled>;
};

export default Header;
