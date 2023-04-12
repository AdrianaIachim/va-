// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconOtherLayerGridIcon(props) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M1.333 2c0-.368.299-.667.667-.667h4.667c.368 0 .666.299.666.667v4.667a.667.667 0 01-.666.666H2a.667.667 0 01-.667-.666V2zm1.334.667V6H6V2.667H2.667zm6-.667c0-.368.298-.667.666-.667H14c.368 0 .667.299.667.667v4.667a.667.667 0 01-.667.666H9.333a.667.667 0 01-.666-.666V2zM10 2.667V6h3.333V2.667H10zM8.667 9.333c0-.368.298-.666.666-.666H14c.368 0 .667.298.667.666V14a.667.667 0 01-.667.667H9.333A.667.667 0 018.667 14V9.333zM10 10v3.333h3.333V10H10zm-8.667-.667c0-.368.299-.666.667-.666h4.667c.368 0 .666.298.666.666V14a.667.667 0 01-.666.667H2A.667.667 0 011.333 14V9.333zM2.667 10v3.333H6V10H2.667z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconOtherLayerGridIcon;
/* prettier-ignore-end */
