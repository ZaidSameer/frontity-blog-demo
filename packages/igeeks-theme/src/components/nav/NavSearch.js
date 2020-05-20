import React from "react";
import { Input } from "@rebass/forms";
import { css } from "theme-ui";

const Anc = css `
  letter-spacing: 0.36px;
  display: flex;
  align-items: center;
  text-align: left;
  text-decoration: none;
  float: left !important;
`;

const NavSearch = React.forwardRef(({ as, ...props }, ref) => {
    const Component = as || Input;
    if (ref)
        props.ref = ref;
    return (
        <a css={Anc}>
            <Component
                ref={ref}
                sx={{
                    outline: "none",
                    border: "none",
                }}
                bg={"navBG"}
                fontSize={"15px"}
                color={"navText"}
                width={["100px", "200px", "200px", "300px"]}
                placeholder="Search"
                {...props}
            />
        </a>
    );
});

export default NavSearch;
