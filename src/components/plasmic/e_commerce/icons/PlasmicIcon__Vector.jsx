// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VectorIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 90 58"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M89.103 57.89h-16.94V27.51c0-1.628-.326-3.176-.49-4.723-.407-3.665-2.28-7.086-5.864-7.005-3.094.082-6.515 2.118-9.04 4.154-2.77 2.362-3.584 5.946-3.42 9.855.243 9.285.08 18.57.08 28.018H35.674V24.415c0-3.502-.815-6.678-4.398-8.307-3.828-1.71-6.679.163-9.448 2.444-3.42 2.932-5.05 6.597-4.968 11.24.163 9.284.081 18.57.081 27.936H0V1.203h15.312v9.204C21.665 1.855 29.972-.67 39.42.144c6.19.57 9.774 3.747 12.87 10.426C57.42 3.402 64.261-.1 73.057.063c8.634.081 15.72 5.701 16.045 14.253.326 14.417 0 28.833 0 43.575z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
