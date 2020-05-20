import React from "react";
import { Text } from "rebass";
import { connect } from "frontity";
import { List } from "../../components/home";
import { getMediaAttributes } from "../../common/helper";
import { Container, Box, Separator } from "../../components";

const ListArticle = ({ data, state, themeMode }) => {
    return (
        <Container type={"fluid"}>
            <Container>
                <Box.BoxItem column={1}>
                    <Box.BoxHeading
                        marginTop={"100px"}
                        as={Text}
                        fontSize={["20px", "24px", "30px"]}
                        title={"List Articles"}
                    />
                    <Box.BoxHeading backgroundColor={"border"} height={"border"} marginBottom={"5px"} />
                </Box.BoxItem>
                <Box.BoxContainer scroll={false}>
                    {data.map(post => {
                        return (
                            <Box.BoxItem key={post.id}>
                                <List
                                    link={post.link}
                                    alignment={"left"}
                                    title={post.title.rendered.replace("&#8217;s", "'s ")}
                                    comment={"3"}
                                    marginTop={"30px"}
                                    image={state.source.attachment[post.featured_media].source_url}
                                    author={state.source.author[post.author].name}
                                    srcSet={getMediaAttributes(state, post.featured_media)}
                                />
                            </Box.BoxItem>
                        );
                    })}
                </Box.BoxContainer>
                <Separator
                    mt={"10px"}
                    bg={themeMode.colors.body}
                    border={`1px solid ${themeMode.colors.border}`}
                    onClick={() => {
                        alert("hello");
                    }}
                    text={"READ ALL"}
                />
            </Container>
        </Container>
    );
};

export default connect(ListArticle);
