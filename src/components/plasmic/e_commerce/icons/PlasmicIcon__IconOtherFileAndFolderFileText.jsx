// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconOtherFileAndFolderFileTextIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.333 1.333H4a1.333 1.333 0 00-1.333 1.334v10.666A1.333 1.333 0 004 14.667h8a1.333 1.333 0 001.333-1.334v-8l-4-4z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9.333 1.333v4h4m-2.666 3.334H5.333m5.334 2.666H5.333M6.667 6H5.333"
        }
        stroke={"currentColor"}
        strokeWidth={"1.2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IconOtherFileAndFolderFileTextIcon;
/* prettier-ignore-end */
