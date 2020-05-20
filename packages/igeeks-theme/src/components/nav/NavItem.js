import React from "react";
import { Link, Box } from "rebass";
import { css } from "frontity";
const stylelink = css `
  letter-spacing: 0.36px;
  display: flex;
  align-items: center;
  text-align: left;
  height: 77px;
  text-decoration: none;
`;
const NavItem = React.forwardRef(({ as, ...props }, ref) => {
    const Component = as || Link;
    if (ref)
        props.ref = ref;
    return (
        <Component
            variant="nav"
            fontSize={"16px"}
            color={"navText"}
            css={stylelink}
            sx={{ fontFamily: "Arvo-Regular" }}
            px={2}
        >
            {props.text}
        </Component>
    );
});

export default NavItem;
