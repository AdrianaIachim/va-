// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2GyyV1uN4xbnqKtJ7pjrQU
// Component: i2BFQN7iML
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_e_commerce.module.css"; // plasmic-import: 2GyyV1uN4xbnqKtJ7pjrQU/projectcss
import sty from "./PlasmicConfermaPswCambiata.module.css"; // plasmic-import: i2BFQN7iML/css
import IconDirectionsChevronLeftIcon from "./icons/PlasmicIcon__IconDirectionsChevronLeft"; // plasmic-import: r8iYFvfxMc/icon

export const PlasmicConfermaPswCambiata__VariantProps = new Array();

export const PlasmicConfermaPswCambiata__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicConfermaPswCambiata__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_library_plasmic_color_type_css.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"group33459"}
            data-plasmic-override={overrides.group33459}
            className={classNames(projectcss.all, sty.group33459)}
          >
            <div
              data-plasmic-name={"card"}
              data-plasmic-override={overrides.card}
              className={classNames(projectcss.all, sty.card)}
            >
              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                {"è stata inviata una mail con il \nrecupero password"}
              </div>
              <div
                data-plasmic-name={"signIn"}
                data-plasmic-override={overrides.signIn}
                className={classNames(projectcss.all, sty.signIn)}
              >
                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__mrGdU
                  )}
                  href={`/login`}
                >
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700, color: "#FFFFFF" }}
                    >
                      {"CONTINUA"}
                    </span>
                  </React.Fragment>
                </a>
              </div>
              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__q5Fp
                )}
              >
                <IconDirectionsChevronLeftIcon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(projectcss.all, sty.svg)}
                  role={"img"}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "group33459", "card", "text", "signIn", "svg"],
  group33459: ["group33459", "card", "text", "signIn", "svg"],
  card: ["card", "text", "signIn", "svg"],
  text: ["text"],
  signIn: ["signIn"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicConfermaPswCambiata__ArgProps,
          internalVariantPropNames: PlasmicConfermaPswCambiata__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicConfermaPswCambiata__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicConfermaPswCambiata";
  } else {
    func.displayName = `PlasmicConfermaPswCambiata.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard(WrappedComponent) {
  const PageGuard = props => (
    <p.PlasmicPageGuard
      minRole={null}
      appId={"2GyyV1uN4xbnqKtJ7pjrQU"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </p.PlasmicPageGuard>
  );

  return PageGuard;
}

export const PlasmicConfermaPswCambiata = Object.assign(
  // Top-level PlasmicConfermaPswCambiata renders the root element
  withPlasmicPageGuard(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    group33459: makeNodeComponent("group33459"),
    card: makeNodeComponent("card"),
    text: makeNodeComponent("text"),
    signIn: makeNodeComponent("signIn"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicConfermaPswCambiata
    internalVariantProps: PlasmicConfermaPswCambiata__VariantProps,
    internalArgProps: PlasmicConfermaPswCambiata__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicConfermaPswCambiata;
/* prettier-ignore-end */
