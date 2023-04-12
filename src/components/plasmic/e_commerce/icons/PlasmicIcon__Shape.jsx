// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ShapeIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 15"}
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
          "M8.395 0h-2.29C3.998 0 2.29 1.67 2.29 3.73v2.24H0v2.984h2.29v5.97h3.052v-5.97h2.29l.763-2.985H5.342V3.731c0-.412.342-.746.763-.746h2.29V0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ShapeIcon;
/* prettier-ignore-end */
