// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconDirectionsChevronLeft2Icon(props) {
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
          "M12.177 3.251a.857.857 0 010 1.212L7.641 9l4.536 4.537a.857.857 0 11-1.212 1.212L5.822 9.606a.857.857 0 010-1.212l5.143-5.143a.857.857 0 011.212 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconDirectionsChevronLeft2Icon;
/* prettier-ignore-end */
