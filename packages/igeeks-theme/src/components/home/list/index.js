import React from "react";
import { Flex, Text, Box } from "rebass";
import { css } from "frontity";
import BoxHeading from "../../box/BoxHeading";
import BoxImage from "../../box/BoxImage";
import { Comment } from "../../../icon";
import { Link } from "../../../components";

import * as moment from "moment/moment.js";

const styleWithFont = css `
  letter-spacing: 0.24px;
  text-align: left;
  color: #a1a3b3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  font-family: WorkSans;
`;
const lefthead = css `
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
`;
const righthead = css `
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
  width: 88%;
`;
const List = React.forwardRef(({ as, state, ...props }, ref) => {
    return props.alignment == "left"
        ? (
            <>
                <Flex marginTop={props.marginTop}>
                    <Link link={props.link}>
                        <BoxImage
                            sizes="145px"
                            type={"child"}
                            link={props.link}
                            image={props.image}
                            srcSet={props.srcSet}
                        />
                    </Link>
                    <BoxHeading
                        css={lefthead}
                        type={"child"}
                        marginLeft={"25px"}
                        as={Text}
                        fontSize={["18px", "22px", "18px", "18px"]}
                        height={["65px", "65px", "65px", "65px"]}
                        title={props.title}
                    />
                </Flex>
                <Flex flexDirection={"row"} marginLeft={["25vw", "17vw", "12vw", "35%"]}>
                    <Text fontSize={["11px", "13px", "11px", "12px"]} width={"auto"} css={styleWithFont}>
                        {props.author}
                    </Text>
                    <Text fontSize={["11px", "13px", "11px", "12px"]} css={styleWithFont} px={1}>
                        |
                    </Text>
                    <Text fontSize={["11px", "13px", "11px", "12px"]} width={"auto"} css={styleWithFont} px={1}>
                        {moment(props.time, "YYYYMMDD").fromNow()}
                    </Text>
                    <Text fontSize={["11px", "13px", "11px", "12px"]} css={styleWithFont} px={1}>
                        |
                    </Text>
                    <Comment height={"14px"} width={"10px"} />
                    <Text fontSize={["11px", "13px", "11px", "12px"]} css={styleWithFont} px={1}>
                        {props.comment}
                    </Text>
                </Flex>
            </>
        )
        : (
            <>
                <Flex
                    marginTop={props.marginTop}
                    className={props.ContainerClass}
                    justifyContent={"space-between"}
                >
                    <div className={props.childClassHead}>
                        <BoxHeading
                            css={righthead}
                            type={"child"}
                            as={Text}
                            fontSize={["18px", "18px", "18px", "18px"]}
                            height={["65px", "65px", "65px", "65px"]}
                            marginRight={"20px"}
                            title={props.title}
                        />
                        <Flex flexDirection={"row"}>
                            <Text fontSize={["11px", "13px", "11px", "12px"]} width={"auto"} css={styleWithFont}>
                                {props.author}
                            </Text>
                            <Text fontSize={["11px", "13px", "11px", "12px"]} css={styleWithFont} px={1}>
                                |
                            </Text>
                            <Text
                                fontSize={["11px", "13px", "11px", "12px"]}
                                width={"auto"}
                                css={styleWithFont}
                                px={1}
                            >
                                {moment(props.time, "YYYYMMDD").fromNow()}
                            </Text>
                            <Text fontSize={["11px", "13px", "11px", "12px"]} css={styleWithFont} px={1}>
                                |
                            </Text>
                            <Comment height={"14px"} width={"10px"} />
                            <Text fontSize={["11px", "13px", "11px", "12px"]} css={styleWithFont} px={1}>
                                {props.comment}
                            </Text>
                        </Flex>
                    </div>
                    <Link link={props.link}>
                        <div className={props.childClassimage}>
                            <BoxImage
                                sizes="145px"
                                type={"child"}
                                link={props.link}
                                image={props.image}
                                srcSet={props.srcSet}
                            />
                        </div>
                    </Link>
                </Flex>
            </>
        );
});

export default List;
