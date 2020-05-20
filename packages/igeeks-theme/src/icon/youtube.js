import React from "react";

const Youtube = props => {
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
            style={{ marginLeft: "35px" }}
            data-name="Layer 1"
            viewBox="0 0 639.37 447.66"
            {...props}
        >
            <title>{"logo"}</title>
            <path
                d="M626.2 70.05a80.11 80.11 0 00-56.35-56.36C519.85 0 319.68 0 319.68 0S119.55 0 69.52 13.17c-26.86 7.37-49 29.49-56.35 56.88C.02 120.08.02 223.86.02 223.86s0 104.28 13.17 153.79a80.08 80.08 0 0056.33 56.32c50.56 13.7 250.17 13.7 250.17 13.7s200.13 0 250.16-13.17a80.14 80.14 0 0056.36-56.36c13.16-50 13.16-153.78 13.16-153.78s.53-104.28-13.17-154.31zM255.96 319.69V127.98l166.42 95.88z"
            />
        </svg>
    );
};
export default Youtube;
