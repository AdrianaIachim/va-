// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2GyyV1uN4xbnqKtJ7pjrQU
import * as React from "react";
import { EmbedCss } from "@plasmicpkgs/plasmic-embed-css"; // plasmic-import: qF0uJxFztB/codeComponent
import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider"; // plasmic-import: DmrLLHGTjGTE/codeComponent

export default function GlobalContextsProvider(props) {
  const { children, embedCssProps, antdConfigProviderProps } = props;
  return (
    <EmbedCss
      {...embedCssProps}
      css={
        embedCssProps && "css" in embedCssProps ? embedCssProps.css : undefined
      }
    >
      <AntdConfigProvider
        {...antdConfigProviderProps}
        borderRadius={
          antdConfigProviderProps && "borderRadius" in antdConfigProviderProps
            ? antdConfigProviderProps.borderRadius
            : 6
        }
        colorBgBase={
          antdConfigProviderProps && "colorBgBase" in antdConfigProviderProps
            ? antdConfigProviderProps.colorBgBase
            : "#ffffff"
        }
        colorError={
          antdConfigProviderProps && "colorError" in antdConfigProviderProps
            ? antdConfigProviderProps.colorError
            : "#ff4d4f"
        }
        colorInfo={
          antdConfigProviderProps && "colorInfo" in antdConfigProviderProps
            ? antdConfigProviderProps.colorInfo
            : "#1677ff"
        }
        colorPrimary={
          antdConfigProviderProps && "colorPrimary" in antdConfigProviderProps
            ? antdConfigProviderProps.colorPrimary
            : "#1677ff"
        }
        colorSuccess={
          antdConfigProviderProps && "colorSuccess" in antdConfigProviderProps
            ? antdConfigProviderProps.colorSuccess
            : "#52c41a"
        }
        colorWarning={
          antdConfigProviderProps && "colorWarning" in antdConfigProviderProps
            ? antdConfigProviderProps.colorWarning
            : "#faad14"
        }
        controlHeight={
          antdConfigProviderProps && "controlHeight" in antdConfigProviderProps
            ? antdConfigProviderProps.controlHeight
            : 32
        }
        lineWidth={
          antdConfigProviderProps && "lineWidth" in antdConfigProviderProps
            ? antdConfigProviderProps.lineWidth
            : 1
        }
        sizeStep={
          antdConfigProviderProps && "sizeStep" in antdConfigProviderProps
            ? antdConfigProviderProps.sizeStep
            : 4
        }
        sizeUnit={
          antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps
            ? antdConfigProviderProps.sizeUnit
            : 4
        }
        spacing={
          antdConfigProviderProps && "spacing" in antdConfigProviderProps
            ? antdConfigProviderProps.spacing
            : undefined
        }
        themeStyles={
          antdConfigProviderProps && "themeStyles" in antdConfigProviderProps
            ? antdConfigProviderProps.themeStyles
            : true
            ? {
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: "300",
                lineHeight: "1.7",
                color: "#535353",
                letterSpacing: "0.2px"
              }
            : undefined
        }
        wireframe={
          antdConfigProviderProps && "wireframe" in antdConfigProviderProps
            ? antdConfigProviderProps.wireframe
            : false
        }
      >
        {children}
      </AntdConfigProvider>
    </EmbedCss>
  );
}
