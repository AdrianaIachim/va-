// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector10Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 43 41"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M42.106 20.461c.396 11.994-8.878 19.483-18.491 20.159C7.385 41.746.543 31.216.035 21.813-.646 8.862 8.911.47 20.051.02c12.554-.507 22.337 8.221 22.054 20.44zm-12.327-.844c-.227-.901-.453-2.647-1.131-4.224-1.244-2.702-3.167-4.73-6.503-4.955-3.676-.225-6.56.845-8.313 4.223-1.64 3.154-2.036 6.42-.848 9.854 1.979 5.744 8.652 7.884 13.289 4.167 2.544-2.083 3.336-5.011 3.506-9.065z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector10Icon;
/* prettier-ignore-end */
