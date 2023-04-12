import * as React from "react";
import { PlasmicTab } from "./plasmic/e_commerce/PlasmicTab";

function Tab_(props, ref) {
  const { plasmicProps } = PlasmicTab.useBehavior(props, ref);
  return <PlasmicTab {...plasmicProps} />;
}

const Tab = React.forwardRef(Tab_);

export default Object.assign(Tab, {
  __plumeType: "text-input"
});
