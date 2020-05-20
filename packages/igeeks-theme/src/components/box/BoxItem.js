import React from "react";
import { Box } from "rebass";
import { css } from "frontity";
const BxContainer = css `
  -webkit-box-flex: 1;
  flex: 1 0 auto;
  margin: 0;
  scroll-snap-align: center;
`;
const BoxItem = React.forwardRef(({ as, column, ...props }, ref) => {
    const Component = as || Box;
    if (ref)
        props.ref = ref;
    const width = column ? column : 3;

    return (
        <Component
            className={props.className}
            css={BxContainer}
            sx={{ display: props.display ? props.display : "grid", gridGap: 1, fontFamily: "Arvo" }}
            ref={ref}
            px={2}
            py={2}
            width={["calc(99vw)", "calc(99vw)", 1 / width]}
        >
            {props.children}
        </Component>
    );
});

export default BoxItem;
