// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 61 59"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M60.646 29.596c.57 17.348-12.787 28.18-26.633 29.158C10.637 60.383.783 45.152.049 31.55-.928 12.817 12.836.68 28.881.03c18.082-.734 32.172 11.89 31.765 29.565zM42.89 28.374c-.325-1.303-.651-3.828-1.629-6.108-1.791-3.91-4.56-6.842-9.366-7.168-5.294-.326-9.448 1.222-11.973 6.109-2.362 4.56-2.932 9.285-1.221 14.253 2.85 8.308 12.461 11.403 19.14 6.027 3.665-3.014 4.805-7.249 5.05-13.113z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
