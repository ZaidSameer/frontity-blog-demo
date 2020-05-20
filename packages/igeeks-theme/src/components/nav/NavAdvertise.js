import React from "react";
import { Image } from "rebass";

const NavAdd = React.forwardRef(({ as, ...props }, ref) => {
    if (ref)
        props.ref = ref;
    return (
        <Image
            src="https://cdn.igeeksblog.com/wp-content/uploads/2020/05/18192328/Screenshot-from-2020-04-27-19-17-26-1.png"
        />
    );
});

export default NavAdd;
