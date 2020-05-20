import React from "react";
import NavContainer from "./NavContainer";
import NavAdd from "./NavAdvertise";
import NavItem from "./NavItem";
import NavSearch from "./NavSearch";

const Nav = React.forwardRef(({ as, ...props }, ref) => {
    const Component = as || "div";
    return <Component {...props} />;
});

Nav.displayName = "Nav";
Nav.Container = NavContainer;
Nav.Item = NavItem;
Nav.Add = NavAdd;
Nav.Search = NavSearch;

export default Nav;
