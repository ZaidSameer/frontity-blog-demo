import React from "react";
import { Heading } from "rebass";

const BoxHeading = React.forwardRef(({ as, ...props }, ref) => {
    const Component = as || Heading;
    if (ref)
        props.ref = ref;

    return props.type == "child"
        ? (
            <Component
                color={"text"}
                height={"auto"}
                letterSpacing={"0.75px"}
                textAlign={"left"}
                fontFamily={"Arvo"}
                marginLeft={props.marginLeft}
                ref={ref}
                width={["100%", "100%", "100%", "240px"]}
                marginBottom={props.marginBottom}
                marginTop={props.marginTop}
                {...props}
            >
                {props.title}
                {props.children}
            </Component>
        )
        : (
            <Component
                color={"text"}
                height={"auto"}
                letterSpacing={"0.75px"}
                textAlign={"left"}
                fontFamily={"Arvo"}
                ref={ref}
                width={["100%", "100%", "100%", "100%"]}
                marginBottom={props.marginBottom}
                marginTop={props.marginTop}
                {...props}
            >
                {props.title}
            </Component>
        );
});

export default BoxHeading;
