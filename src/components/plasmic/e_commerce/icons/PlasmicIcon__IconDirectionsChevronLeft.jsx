// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconDirectionsChevronLeftIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
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
          "M21.649 5.78c.595.595.595 1.56 0 2.155L13.583 16l8.066 8.065a1.524 1.524 0 11-2.155 2.155l-9.143-9.142a1.524 1.524 0 010-2.155l9.143-9.143a1.524 1.524 0 012.155 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconDirectionsChevronLeftIcon;
/* prettier-ignore-end */
