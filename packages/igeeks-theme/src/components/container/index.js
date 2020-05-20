import React from "react";
import { Box } from "rebass";

const Container = React.forwardRef(({ as, ...props }, ref) => {
    const Component = as || Box;
    if (ref)
        props.ref = ref;
    return props.type == "fluid"
        ? (
            <Component
                backgroundColor={props.backgroundColor ? props.backgroundColor : "body"}
                ref={ref}
                {...props}
            >
                {props.children}
            </Component>
        )
        : (
            <Component backgroundColor="body" ref={ref} {...props} sx={{ maxWidth: 1148, mx: "auto" }}>
                {props.children}
            </Component>
        );
});

export default Container;
