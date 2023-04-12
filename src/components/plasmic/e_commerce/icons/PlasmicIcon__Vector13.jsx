// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector13Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 15"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.829 6.105H7.158v2.882h3.839c-.357 1.832-1.853 2.884-3.84 2.884-2.341 0-4.229-1.968-4.229-4.41 0-2.441 1.888-4.41 4.23-4.41 1.008 0 1.92.374 2.635.985l2.084-2.171C10.607.712 8.98 0 7.157 0 3.19 0 0 3.323 0 7.462c0 4.138 3.188 7.462 7.158 7.462 3.578 0 6.833-2.714 6.833-7.462a6.49 6.49 0 00-.162-1.357z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector13Icon;
/* prettier-ignore-end */
