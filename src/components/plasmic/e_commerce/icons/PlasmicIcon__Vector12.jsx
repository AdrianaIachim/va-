// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector12Icon(props) {
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
          "M11.932 40.486H0V1.296h10.744V8.22c2.093-1.97 3.846-4.223 6.108-5.518C19.113 1.35 21.94.957 24.938 0v10.868c-3.393 1.126-6.673 1.97-9.783 3.21-2.262.957-3.336 2.759-3.28 5.518.226 6.87.057 13.795.057 20.89z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector12Icon;
/* prettier-ignore-end */
