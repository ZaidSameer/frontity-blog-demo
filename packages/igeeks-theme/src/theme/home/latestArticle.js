import React from "react";
import { Text } from "rebass";
import { connect, css } from "frontity";
import { getMediaAttributes } from "../../common/helper";
import { Container, Box, Separator, Link } from "../../components";
const heading = css `
  height: 150px;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4; /* number of lines to show */
  -webkit-box-orient: vertical;
`;
const LatestArticle = ({ themeMode, data, state }) => {
    return (
        <Container type="fluid">
            <Container>
                <Box.BoxItem column={1}>
                    <Box.BoxHeading
                        as={Text}
                        marginTop={"100px"}
                        title={"Latest Articles"}
                        fontSize={["20px", "24px", "30px"]}
                    />
                    <Box.BoxHeading backgroundColor={"border"} height={"border"} marginBottom={"5px"} />
                </Box.BoxItem>
                {data.map(post => {
                    return (
                        <Box.BoxContainer key={post.id} scroll={false}>
                            <Box.BoxItem display={"inline-block"} column={3}>
                                <Box.BoxHeading
                                    lineHeight={1.6}
                                    letterSpacing={"0.6px"}
                                    as={Text}
                                    fontSize={["20px", "25px", "30px"]}
                                    title={post.title.rendered.replace("&#8217;s", "'s ")}
                                    marginTop={"5px"}
                                />
                                <Box.BoxFooter
                                    title={"How to Share Apple Music Songs to Instagram Stories"}
                                    author={state.source.author[post.author].name}
                                    time={post.date_gmt}
                                />
                            </Box.BoxItem>
                            <Box.BoxItem className={"swap"} column={3}>
                                <Box.BoxHeading
                                    lineHeight={2}
                                    letterSpacing={"0.36px"}
                                    fontFamily={"WorkSans"}
                                    as={Text}
                                    fontSize={["13px", "15px", "18px"]}
                                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                    marginTop={"5px"}
                                    css={heading}
                                />
                            </Box.BoxItem>
                            <Box.BoxItem column={3} className={"swap1"}>
                                <Link link={post.link}>
                                    <Box.BoxImage
                                        sizes="(max-width: 300px) 300px, (max-width: 350px) 350px, (max-width: 400px) 400px, (max-width: 500px) 500px, (max-width: 600px) 600px, (max-width: 700px) 700px,(max-width: 800px) 800px, (max-width: 832px) 850px, 400px"
                                        image={state.source.attachment[post.featured_media].source_url}
                                        srcSet={getMediaAttributes(state, post.featured_media)}
                                    />
                                </Link>
                            </Box.BoxItem>
                        </Box.BoxContainer>
                    );
                })}

                <Separator
                    bg={themeMode.colors.body}
                    border={`1px solid ${themeMode.colors.border}`}
                    onClick={() => {
                        alert("hello");
                    }}
                    text={"VIEW ALL"}
                />
            </Container>
        </Container>
    );
};

export default connect(LatestArticle);
