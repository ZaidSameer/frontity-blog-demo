import React from "react";
import { styled, css } from "frontity";
import { Button, Text } from "rebass";

const Separator = props => {
    const Line = styled.h1 `
    display: flex;
    flex-direction: row;
    &::before {
      content: "";
      flex: 1 1;
      border-bottom: ${props.border};
      margin: auto;
    }
    &::after {
      content: "";
      flex: 1 1;
      border-bottom: ${props.border};
      margin: auto;
    }
  `;
    return (
        <Line
            css={css `
        background: ${props.bg};
        margin-top: ${props.mt};
      `}
        >
            <Button height={"29px"} width={"100px"} bg={"#f3de4f"} onClick={props.onClick}>
                <Text
                    css={css `
            width: 64px;
            height: 15px;
            font-family: WorkSans;
            font-size: 12px;
            color: #000000;
            font-weight: 500;
            border-radius: 0px;
          `}
                >
                    {props.text}
                </Text>
            </Button>
        </Line>
    );
};

export default Separator;
