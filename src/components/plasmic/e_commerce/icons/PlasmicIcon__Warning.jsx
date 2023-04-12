// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function WarningIcon(props) {
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
        d={
          "M14.933 13.375l-6.5-11.25A.494.494 0 008 1.875a.492.492 0 00-.433.25l-6.5 11.25a.5.5 0 00.433.75h13a.5.5 0 00.433-.75zM7.5 6.5c0-.069.056-.125.125-.125h.75c.069 0 .125.056.125.125v2.875a.125.125 0 01-.125.125h-.75a.125.125 0 01-.125-.125V6.5zM8 12a.75.75 0 010-1.5.75.75 0 010 1.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WarningIcon;
/* prettier-ignore-end */
