import React from "react";
import { connect, css } from "frontity";
import { List } from "../../components/home";
import { getMediaAttributes } from "../../common/helper";
import { Container, Box, Link } from "../../components";
import { Text, Flex, Box as BoxContainer } from "rebass";

const heading = css `
  text-decoration: none;
  height: 75px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
`;
const TopArticle = ({ state, data }) => {
    return (
        <Container type="fluid">
            <Container>
                <Box.BoxContainer>
                    {data.map(post => {
                        return (
                            <Box.BoxItem key={post[0].id} column={3}>
                                <Box.BoxHeading
                                    as={Text}
                                    fontSize={["20px", "24px", "26px", "30px"]}
                                    title={state.source.category[post[0].categories[0]].name}
                                />
                                <Box.BoxHeading backgroundColor={"border"} height={"border"} marginBottom={"5px"} />
                                {state.source.attachment[post[0].featured_media] && (
                                    <Link link={post[0].link}>
                                        <Box.BoxImage
                                            sizes="(max-width: 300px) 300px, (max-width: 350px) 350px, (max-width: 400px) 400px, (max-width: 500px) 500px, (max-width: 600px) 600px, (max-width: 700px) 700px,(max-width: 800px) 800px, (max-width: 832px) 850px, 400px"
                                            image={state.source.attachment[post[0].featured_media].source_url}
                                            srcSet={getMediaAttributes(state, post[0].featured_media)}
                                        />
                                    </Link>
                                )}
                                <Box.BoxHeading
                                    as={Text}
                                    fontSize={["18px", "28px", "28px", "21px"]}
                                    title={post[0].title.rendered.replace("&#8217;s", "'s ")}
                                    marginTop={"5px"}
                                    css={heading}
                                />
                                <Box.BoxFooter
                                    time={post[0].date_gmt}
                                    author={state.source.author[post[0].author].name}
                                    comment={"3"}
                                />
                                <Flex flexWrap={"wrap"} width={"97%"}>
                                    <BoxContainer
                                        sx={{
                                            display: "grid",
                                            gridGap: 1,
                                            fontFamily: "Arvo",
                                        }}
                                        width={[1, 1 / 2, 1, 1]}
                                    >
                                        {state.source.attachment[post[1].featured_media] && (
                                            <List
                                                childClassimage={"swap-img-top"}
                                                childClassHead={"swap-img-head"}
                                                ContainerClass={"swap-img-container"}
                                                title={post[1].title.rendered.replace("&#8217;s", "'s ")}
                                                comment={"3"}
                                                marginTop={"30px"}
                                                image={state.source.attachment[post[1].featured_media].source_url}
                                                link={post[1].link}
                                                time={post[1].date_gmt}
                                                author={state.source.author[post[1].author].name}
                                                srcSet={getMediaAttributes(state, post[1].featured_media)}
                                            />
                                        )}
                                    </BoxContainer>
                                    <BoxContainer
                                        sx={{
                                            display: "grid",
                                            gridGap: 1,
                                            fontFamily: "Arvo",
                                        }}
                                        width={[1, 1 / 2, 1, 1]}
                                    >
                                        {state.source.attachment[post[1].featured_media] && (
                                            <List
                                                childClassimage={"swap-img-top"}
                                                childClassHead={"swap-img-head"}
                                                ContainerClass={"swap-img-container"}
                                                title={post[2].title.rendered.replace("&#8217;s", "'s ")}
                                                comment={"3"}
                                                marginTop={"30px"}
                                                link={post[2].link}
                                                image={state.source.attachment[post[2].featured_media].source_url}
                                                time={post[2].date_gmt}
                                                author={state.source.author[post[2].author].name}
                                                srcSet={getMediaAttributes(state, post[2].featured_media)}
                                            />
                                        )}
                                    </BoxContainer>
                                </Flex>
                            </Box.BoxItem>
                        );
                    })}
                </Box.BoxContainer>
            </Container>
        </Container>
    );
};

export default connect(TopArticle);
