import React from "react";
import { Flex } from "rebass";
import { css } from "frontity";
const boxkit = css `
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
`;

const BoxContainer = React.forwardRef(({ as, ...props }, ref) => {
    const Component = as || Flex;
    if (ref)
        props.ref = ref;
    return props.scroll == false
        ? (
            <Component ref={ref} flexWrap="wrap" backgroundColor={"body"} {...props}>
                {props.children}
            </Component>
        )
        : (
            <Component ref={ref} flexWrap="wrap" css={boxkit} backgroundColor={"body"} {...props}>
                {props.children}
            </Component>
        );
});

export default BoxContainer;
