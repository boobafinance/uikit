import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <image width={24} height={24} href="/images/alife/2.png" />
    </Svg>
  );
};

export default Icon;
