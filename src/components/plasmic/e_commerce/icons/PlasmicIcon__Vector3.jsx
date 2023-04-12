// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 42 80"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.004 41.215H0V27.776c2.2-.081 4.317-.244 6.597-.326.163-3.258 0-6.353.489-9.366C9.61 3.26 20.525-2.604 34.534 1.06c7.411 1.955 7.411 1.874 5.457 9.204-.57 2.036-1.06 4.072-1.548 6.108-12.706-2.932-14.986-1.14-13.846 11.24H37.06v13.52H24.516V79.82H6.923c.081-12.706.081-25.493.081-38.606z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
