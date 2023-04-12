// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconDirectionsChevronDown3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2.878 5.176a.756.756 0 011.073 0l4.016 4.032 4.016-4.032a.756.756 0 011.073 0 .764.764 0 010 1.077l-4.553 4.572a.757.757 0 01-1.073 0L2.878 6.253a.764.764 0 010-1.077z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconDirectionsChevronDown3Icon;
/* prettier-ignore-end */
