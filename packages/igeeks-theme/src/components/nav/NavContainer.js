/** @format */

import React from "react";
import { css } from "frontity";
import { Flex } from "rebass";

const NavContainer = React.forwardRef(({ as, ...props }, ref) => {
    if (ref)
        props.ref = ref;
    return (
        <Flex
            flexWrap="wrap"
            alignItems={"center"}
            bg={props.theme.colors.navBG}
            height={"77px"}
            css={css `
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.04);
        background: ${props.theme.colors.navBG};
        margin-bottom: ${props.theme.colors.navBG == "#313131" ? "0px" : "9px"};
      `}
        >
            {props.children}
        </Flex>
    );
});

export default NavContainer;
