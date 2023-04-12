// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector6Icon(props) {
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
          "M42.106 20.548c.396 12.045-8.878 19.566-18.491 20.245C7.385 41.923.543 31.349.035 21.905-.646 8.9 8.911.473 20.051.021 32.606-.488 42.39 8.277 42.106 20.548zM29.78 19.7c-.227-.905-.453-2.658-1.131-4.241-1.244-2.714-3.167-4.75-6.503-4.976-3.676-.227-6.56.848-8.313 4.24-1.64 3.167-2.036 6.447-.848 9.897 1.979 5.768 8.652 7.917 13.289 4.184 2.544-2.092 3.336-5.032 3.506-9.104z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector6Icon;
/* prettier-ignore-end */
