import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const LogoBoba: React.FC<LogoProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <image width="24" height="24" href="/images/egg/9.png" />
    </Svg>
  );
};

export default LogoBoba;
