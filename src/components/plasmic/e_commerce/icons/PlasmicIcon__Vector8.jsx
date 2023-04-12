// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector8Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 41"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.932 40.658H0V1.301h10.744v6.955c2.093-1.98 3.846-4.241 6.108-5.542C19.113 1.357 21.94.961 24.938 0v10.914c-3.393 1.13-6.673 1.98-9.783 3.223-2.262.961-3.336 2.771-3.28 5.542.226 6.899.057 13.854.057 20.98z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector8Icon;
/* prettier-ignore-end */
