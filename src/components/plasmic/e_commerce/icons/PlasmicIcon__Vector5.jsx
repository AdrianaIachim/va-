// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector5Icon(props) {
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
          "M61.864 40.193H50.102V19.101c0-1.131-.226-2.206-.34-3.28-.282-2.545-1.583-4.92-4.07-4.863-2.15.056-4.525 1.47-6.278 2.884-1.922 1.64-2.488 4.128-2.375 6.842.17 6.447.057 12.893.057 19.453H24.768V16.952c0-2.432-.565-4.637-3.053-5.768-2.658-1.188-4.637.113-6.56 1.696-2.375 2.036-3.506 4.58-3.45 7.804.114 6.447.057 12.893.057 19.396H0V.835h10.631v6.39C15.041 1.288 20.81-.465 27.37.1c4.297.396 6.785 2.602 8.934 7.239C39.867 2.362 44.617-.07 50.724.044 56.718.1 61.638 4.002 61.864 9.94c.226 10.009 0 20.018 0 30.253z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */
