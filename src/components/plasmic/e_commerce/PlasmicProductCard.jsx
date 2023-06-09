// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2GyyV1uN4xbnqKtJ7pjrQU
// Component: 1xV2-KiYepMuGB
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_e_commerce.module.css"; // plasmic-import: 2GyyV1uN4xbnqKtJ7pjrQU/projectcss
import sty from "./PlasmicProductCard.module.css"; // plasmic-import: 1xV2-KiYepMuGB/css
import ShoppingCartIcon from "./icons/PlasmicIcon__ShoppingCart"; // plasmic-import: Zm4wjLaGmVITcV/icon
import HeartOIcon from "./icons/PlasmicIcon__HeartO"; // plasmic-import: w6mtT_hqzPVxgp/icon
import ExpandIcon from "./icons/PlasmicIcon__Expand"; // plasmic-import: D7t9AaBjr0ar3t/icon
import f1KQ6KA7WNWjTs from "./images/f1.jpg"; // plasmic-import: K-Q6kA7wN_WjTS/picture

export const PlasmicProductCard__VariantProps = new Array(
  "withReviews",
  "onSale"
);

export const PlasmicProductCard__ArgProps = new Array(
  "title",
  "price",
  "image"
);

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicProductCard__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "withReviews",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.withReviews
      },
      {
        path: "onSale",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.onSale
      }
    ],

    [$props, $ctx]
  );

  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootonSale]: hasVariant($state, "onSale", "onSale"),
          [sty.rootwithReviews]: hasVariant(
            $state,
            "withReviews",
            "withReviews"
          )
        }
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <div className={classNames(projectcss.all, sty.freeBox___4AOv6)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img___9K3FO)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"none"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              src={{
                src: f1KQ6KA7WNWjTs,
                fullWidth: 270,
                fullHeight: 310,
                aspectRatio: undefined
              }}
            />
          ),

          value: args.image
        })}
        {(hasVariant($state, "onSale", "onSale") ? true : true) ? (
          <div
            className={classNames(projectcss.all, sty.freeBox__dy7Bl, {
              [sty.freeBoxonSale__dy7BLbj3Nk]: hasVariant(
                $state,
                "onSale",
                "onSale"
              )
            })}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___6Hlb
              )}
            >
              {"Sale"}
            </div>
          </div>
        ) : null}
        {(triggers.hover_root ? true : true) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__zBZz)}
          >
            <ShoppingCartIcon
              className={classNames(projectcss.all, sty.svg__mgFoN)}
              role={"img"}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__i9To8
              )}
            >
              {"Add to cart"}
            </div>
            <HeartOIcon
              className={classNames(projectcss.all, sty.svg__ffO8T)}
              role={"img"}
            />

            <ExpandIcon
              className={classNames(projectcss.all, sty.svg__hX0D)}
              role={"img"}
            />
          </p.Stack>
        ) : null}
      </div>
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__lQfBv)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Title",
          value: args.title,
          className: classNames(sty.slotTargetTitle)
        })}
        {p.renderPlasmicSlot({
          defaultContents: "$100",
          value: args.price,
          className: classNames(sty.slotTargetPrice)
        })}
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicProductCard__ArgProps,
          internalVariantPropNames: PlasmicProductCard__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicProductCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCard";
  } else {
    func.displayName = `PlasmicProductCard.${nodeName}`;
  }
  return func;
}

export const PlasmicProductCard = Object.assign(
  // Top-level PlasmicProductCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicProductCard
    internalVariantProps: PlasmicProductCard__VariantProps,
    internalArgProps: PlasmicProductCard__ArgProps
  }
);

export default PlasmicProductCard;
/* prettier-ignore-end */
