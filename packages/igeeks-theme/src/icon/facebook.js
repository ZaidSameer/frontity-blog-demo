import * as React from "react";

const Facebook = props => {
    const [color, useColor] = React.useState(props.color ? props.color : "white");
    return (
        <svg
            onMouseEnter={() => {
                useColor("#f3de4f");
            }}
            onMouseLeave={() => {
                useColor(props.color ? props.color : "white");
            }}
            fill={color}
            style={{ marginLeft: props.marginLeft ? props.marginLeft : "35px" }}
            data-name="Capa 1"
            viewBox="0 0 96.12 96.12"
            {...props}
        >
            <title>{"facebook"}</title>
            <path
                d="M72.09 0H59.62c-14 0-23 9.28-23 23.66v10.9H24a2 2 0 00-2 2v15.77a2 2 0 002 2h12.57v39.83a2 2 0 002 2h16.31a2 2 0 002-2V54.29H71.5a2 2 0 002-2V36.52a2 2 0 00-2-2H56.84v-9.2c0-4.45 1.06-6.7 6.85-6.7h8.4a2 2 0 002-2V2a2 2 0 00-2-2z"
            />
        </svg>
    );
};

export default Facebook;
