import React, { AnchorHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

const InnerMenuLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, ...otherProps }) => {
  const isHttpLink = href?.startsWith("http");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: any = isHttpLink ? "a" : NavLink;
  const props = isHttpLink ? { href } : { to: href };
  return <Tag {...props} {...otherProps} target="_blank" rel="noreferrer" />;
};

export default InnerMenuLink;
