import * as React from "react";

const Comment = props => {
    return (
        <svg data-name="Layer 1" viewBox="0 0 60 55" {...props} fill={"#a1a3b3"}>
            <title>{"Orion_comments"}</title>
            <path fill={"#a1a3b3"} d="M52 4.5H2v30h8v11l11.1-11H52z" transform="translate(-2 -4.5)" />
            <path
                fill={"#a1a3b3"}
                d="M56 26.5v12H28v10h16.9l11.1 11v-11h6v-22z"
                transform="translate(-2 -4.5)"
            />
        </svg>
    );
};

export default Comment;
