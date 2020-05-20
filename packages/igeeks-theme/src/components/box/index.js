import React from "react";
import BoxContainer from "./BoxContainer";
import BoxItem from "./BoxItem";
import BoxHeading from "./BoxHeading";
import BoxImage from "./BoxImage";
import BoxFooter from "./BoxFooter";

const Box = React.forwardRef(({ as, ...props }, ref) => {
    const Component = as || "div";
    return <Component {...props} />;
});

Box.displayName = "Box";
Box.BoxContainer = BoxContainer;
Box.BoxItem = BoxItem;
Box.BoxHeading = BoxHeading;
Box.BoxImage = BoxImage;
Box.BoxFooter = BoxFooter;
export default Box;
