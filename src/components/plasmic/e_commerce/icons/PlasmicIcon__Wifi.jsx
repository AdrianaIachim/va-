// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function WifiIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 11"}
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
          "M7.667 2.284c2.225 0 4.364.855 5.977 2.386a.31.31 0 00.435-.003l1.16-1.17a.323.323 0 00-.002-.458c-4.232-4.052-10.908-4.052-15.14 0a.323.323 0 00-.003.458l1.16 1.17a.31.31 0 00.436.003 8.68 8.68 0 015.977-2.386zm0 3.808c1.222 0 2.401.454 3.307 1.274a.312.312 0 00.435-.006l1.16-1.17a.323.323 0 00-.005-.46 7.192 7.192 0 00-9.791 0 .323.323 0 00-.005.46l1.16 1.17a.31.31 0 00.434.006 4.929 4.929 0 013.305-1.274zM9.99 8.654a.315.315 0 01-.094.231L7.89 10.907a.313.313 0 01-.445 0L5.439 8.885a.315.315 0 01.01-.458 3.438 3.438 0 014.437 0c.064.058.102.14.103.227z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WifiIcon;
/* prettier-ignore-end */
