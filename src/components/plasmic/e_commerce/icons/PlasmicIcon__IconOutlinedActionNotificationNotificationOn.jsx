// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconOutlinedActionNotificationNotificationOnIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.333 8.2c0-1.38-.562-2.702-1.562-3.677A5.403 5.403 0 0012 3a5.404 5.404 0 00-3.771 1.523A5.135 5.135 0 006.667 8.2C6.667 14.267 4 16 4 16h16s-2.667-1.733-2.667-7.8zM14 20a2.186 2.186 0 01-.846.732A2.588 2.588 0 0112 21c-.405 0-.803-.092-1.154-.268A2.186 2.186 0 0110 20"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IconOutlinedActionNotificationNotificationOnIcon;
/* prettier-ignore-end */
