// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector11Icon(props) {
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
          "M4.863 28.494H0v-9.29c1.527-.057 2.997-.17 4.58-.226.114-2.252 0-4.392.34-6.476C6.673 2.254 14.25-1.8 23.977.734c5.146 1.351 5.146 1.295 3.788 6.363a116.1 116.1 0 00-1.074 4.223c-8.822-2.027-10.405-.788-9.613 7.77h8.652v9.348h-8.71v26.747H4.807c.056-8.784.056-17.625.056-26.69z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector11Icon;
/* prettier-ignore-end */
