// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector9Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 62 41"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M61.864 40.023H50.102V19.02c0-1.126-.226-2.196-.34-3.266-.282-2.534-1.583-4.9-4.07-4.843-2.15.057-4.525 1.464-6.278 2.872-1.922 1.633-2.488 4.11-2.375 6.813.17 6.42.057 12.839.057 19.37H24.768V16.88c0-2.421-.565-4.617-3.053-5.743-2.658-1.183-4.637.112-6.56 1.689-2.375 2.027-3.506 4.56-3.45 7.77.114 6.42.057 12.839.057 19.315H0V.83h10.631v6.364C15.041 1.282 20.81-.463 27.37.1c4.297.394 6.785 2.59 8.934 7.207 3.563-4.955 8.313-7.376 14.42-7.263 5.994.056 10.914 3.941 11.14 9.854.226 9.966 0 19.933 0 30.125z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector9Icon;
/* prettier-ignore-end */
