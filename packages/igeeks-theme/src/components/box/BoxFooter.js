import React from "react";
import { css } from "frontity";
import { Flex, Text } from "rebass";
import { Comment } from "../../icon";
import * as moment from "moment/moment.js";

const styleWithFont = css `
  letter-spacing: 0.24px;
  text-align: left;
  color: #a1a3b3;
  font-family: WorkSans;
`;
const BoxFooter = React.forwardRef(({ as, ...props }, ref) => {
    return (
        <Flex flexDirection={"row"} marginTop={"5px"}>
            <Text fontSize={["10px", "13px", "12px"]} css={styleWithFont}>
                {props.author}
            </Text>
            <Text fontSize={["10px", "13px", "12px"]} css={styleWithFont} px={2}>
                |
            </Text>
            <Text fontSize={["10px", "13px", "12px"]} css={styleWithFont} px={2}>
                {moment(props.time, "YYYYMMDD").fromNow()}
            </Text>
            {props.comment && (
                <Text fontSize={["10px", "13px", "12px"]} css={styleWithFont} px={2}>
                    |
                </Text>
            )}
            {props.comment && <Comment height={"14px"} width={"10px"} />}
            <Text fontSize={["10px", "13px", "12px"]} css={styleWithFont} px={1}>
                {props.comment}
            </Text>
        </Flex>
    );
});

export default BoxFooter;
