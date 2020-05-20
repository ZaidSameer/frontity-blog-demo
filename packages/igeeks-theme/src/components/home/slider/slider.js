import React, {Fragment} from "react";
import Slider from "@farbenmeer/react-spring-slider";
import { Button, Text, Box, Flex, Image } from "rebass";
import { css, connect } from "frontity";
import ProgressiveSlider from "./progressiveSlider";
import { getMediaAttributes } from "../../../common/helper";

const imageStyle = src => ({
    backgroundSize: "cover",
    backgroundImage: `url(${src}),linear-gradient(to top, rgba(254, 230, 0, 0.35), rgba(0, 0, 0, 0.7))`,
    height: "100%",
    width: "100%",
});
const arrow = css `
  opacity: 0.1;
  background-color: #ffffff;
  border-radius: 50%;
  position: absolute;
`;
const title = css `
  // width: 779px;
  height: 106px;
  font-family: Arvo;
  // font-size: 48px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.96px;
  text-align: left;
  color: #ffffff;
  position: absolute;
  // top: 25vh;
  left: 25vw;
`;
const btn = css `
  background-color: #f3de4f;
  left: 25vw;
  color: #000000;
  position: absolute;
  font-family: WorkSans;
  justify-content: center;
  font-weight: bold;
  letter-spacing: 0.6px;
`;
const Carousel = ({ state, data }) => {
    return (
        <div className={"slider-igeeks"}>
            <Slider
                // hasArrows
                // LeftArrowComponent={LeftArrowComponent}
                // RightArrowComponent={rightArrowComponent}
                auto={6000}
            >
                {data.map((item, index) => {
                    return (
                        <Fragment key={index}>
                            {state.source.attachment[item.featured_media] && (
                                <ProgressiveSlider
                                    style={imageStyle(state.source.attachment[item.featured_media].source_url)}
                                    sizes="(max-width: 300px) 300px, (max-width: 350px) 350px, (max-width: 400px) 400px, (max-width: 500px) 500px, (max-width: 600px) 600px, (max-width: 700px) 700px,(max-width: 800px) 800px, (max-width: 832px) 850px, 400px"
                                    image={state.source.attachment[item.featured_media].source_url}
                                    srcSet={getMediaAttributes(state, item.featured_media)}
                                />
                            )}

                            <div
                                className={"slider-igeeks-shadow"}
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    backgroundImage:
                                        "linear-gradient(to top, rgba(254, 230, 0, 0.35), rgba(0, 0, 0, 0.7))",
                                }}
                            >
                                <Button
                                    width={"auto"}
                                    height={["25px", "25px", "29px"]}
                                    fontSize={["10px", "12px", "12px", "12px"]}
                                    marginTop={["10vh", "10vh", "15vh"]}
                                    css={btn}
                                >
                                    {state.source.category[item.categories[0]].name}
                                </Button>
                                <Text
                                    width={["300px", "500px", "779px"]}
                                    fontSize={["15px", "25px", "35px", "48px"]}
                                    marginTop={["15vh", "15vh", "18vh", "25vh"]}
                                    css={title}
                                >
                                    {item.title.rendered.replace("&#8217;s", "'s ")}
                                </Text>
                            </div>
                        </Fragment>
                    );
                })}
            </Slider>
            <div
                className={"slider-igeeks-shadow"}
                style={{
                    position: "absolute",
                    top: 0,
                }}
            >
                <Flex>
                    <Box
                        sx={{ cursor: "pointer" }}
                        marginTop={["21vh", "24vh", "24vh", "51vh"]}
                        marginLeft={["25vw", "25vw", "25vw", "25vw"]}
                        width={["35px", "50px", "50px", "50px"]}
                        height={["35px", "50px", "50px", "50px"]}
                        css={arrow}
                    />
                    <Box
                        sx={{ cursor: "pointer" }}
                        marginTop={["21vh", "24vh", "24vh", "51vh"]}
                        marginLeft={["35vw", "35vw", "32vw", "30vw"]}
                        width={["35px", "50px", "50px", "50px"]}
                        height={["35px", "50px", "50px", "50px"]}
                        css={arrow}
                    />
                </Flex>
            </div>
        </div>
    );
};
export default connect(Carousel);
