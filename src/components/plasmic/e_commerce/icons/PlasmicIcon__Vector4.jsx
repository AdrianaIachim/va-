// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 59"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.185 58.56H0V1.874h15.475v10.018c3.014-2.85 5.538-6.108 8.796-7.982C27.53 1.955 31.601 1.385 35.918 0v15.72c-4.886 1.628-9.61 2.85-14.09 4.642-3.258 1.385-4.805 3.99-4.724 7.982.326 9.936.081 19.954.081 30.217z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
