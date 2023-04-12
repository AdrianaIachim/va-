// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector7Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 56"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.863 28.615H0v-9.33c1.527-.057 2.997-.17 4.58-.226.114-2.262 0-4.411.34-6.503C6.673 2.264 14.25-1.808 23.977.736c5.146 1.358 5.146 1.302 3.788 6.39a118.116 118.116 0 00-1.074 4.242c-8.822-2.036-10.405-.792-9.613 7.804h8.652v9.387h-8.71v26.86H4.807c.056-8.821.056-17.7.056-26.804z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector7Icon;
/* prettier-ignore-end */
