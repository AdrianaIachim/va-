// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconDirectionsChevronRightIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
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
          "M5.822 3.251a.857.857 0 011.213 0l5.142 5.143a.857.857 0 010 1.212L7.035 14.75a.857.857 0 11-1.213-1.212L10.36 9 5.822 4.463a.857.857 0 010-1.212z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconDirectionsChevronRightIcon;
/* prettier-ignore-end */
