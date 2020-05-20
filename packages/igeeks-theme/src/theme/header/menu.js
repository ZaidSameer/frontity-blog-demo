import React from "react";
import Container from "../../components/container";
import { Flex, Box, Text, Button } from "rebass";
import { css, styled } from "frontity";
import { Facebook, Twitter, Instagram, Youtube } from "../../icon";
const btn = css `
  width: 131px;
  height: 50px;
  border-radius: 5px;
  color: #000;
  background-color: #f3de4f;
  font-family: WorkSans;
  font-size: 14px;
  font-weight: 500;
`;
const Heading = styled.h1 `
  font-size: 0.6666666666666666em;
  text-align: left;
  letter-spacing: 0.28px;

  margin-right: 17px;
  color: #3a3b42;
  font-family: WorkSans;
  font-weight: 600;
`;
const sigup = css `
  width: 131px;
  height: 50px;
  border-radius: 5px;
  color: #fff;
  background-color: #000;
  font-family: WorkSans;
  font-size: 14px;
  font-weight: 500;
`;
const Category = styled.h1 `
  font-size: 1em;
  line-height: 2.5;
  text-align: left;
  letter-spacing: 0.48px;
  cursor: pointer;
  font-family: Arvo;
  font-weight: 700;

  color: #303139;
  &:hover {
    color: #f3de4f;
  }
`;
const OtherCatTitle = styled.h1 `
  font-size: 0.8333333333333334em;
  line-height: 2.4;
  text-align: left;
  letter-spacing: 0.4px;
  color: #3a3b42;
  font-family: WorkSans;
  font-weight: 600;
`;
const OtherCategory = styled.h1 `
  font-size: 0.75em;
  line-height: 2.67;
  text-align: left;
  letter-spacing: 0.36px;
  color: #3a3b42;
  font-family: WorkSans;
  font-weight: 400;
`;
const BrightNess = styled.h1 `
  font-size: 0.8333333333333334em;
  line-height: 2.4;
  text-align: left;
  letter-spacing: 0.4px;
  color: #3a3b42;
  font-family: WorkSans;
  font-weight: 600;
  height: 14px;
  width: 131px;
`;

const DarkMode = styled.h1 `
  font-size: 0.5833333333333334em;

  text-align: left;
  letter-spacing: 0.28px;
  color: #3a3b42;
  font-family: WorkSans;
  font-weight: 600;
  height: 11px;
`;
const ShortLink = css `
  font-family: WorkSans;
  font-size: 0.6em;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 4;
  letter-spacing: normal;
  text-align: right;
  color: #3a3b42;
  margin-left: 10px;
`;

const SideMenu = props => {
    return (
        <Container
            type={"fluid"}
            style={{
                height: "100%",
                width: "100%",
                backgroundColor: "transparent",
                position: "absolute",
                zIndex: 99,
            }}
        >
            <Box
                style={{
                    width: "55%",
                    marginLeft: 50,
                    backgroundColor: "white",
                    borderRadius: 10,
                    boxShadow: "0 0 100px 0 rgba(0, 0, 0, 0.15)",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                height={["50vh", "50vh", "50vh", "95vh"]}
            >
                <Flex justifyContent={"space-between"} p={3} alignItems={"center"}>
                    <Box width={[1]}>
                        <Button css={btn} mr={2}>
                            SIGNIN
                        </Button>
                    </Box>
                    <Box width={[1]} display={"flex"} alignItems={"center"}>
                        <Heading>DON’T HAVE AN ACCOUNT?</Heading>
                        <Button css={sigup} mr={2}>
                            SIGNUP
                        </Button>
                    </Box>
                </Flex>
                <Flex p={3} flexWrap="wrap">
                    <Box width={[1 / 3]}>
                        <Category>Iphone</Category>
                        <Category>iPad</Category>
                        <Category>Apple Watch</Category>
                        <Category>Apple TV</Category>
                        <Category>Mac</Category>
                        <Category>Reviews</Category>
                        <Category>How To</Category>
                        <Category>HomeKit</Category>
                        <Category>Forums</Category>
                    </Box>
                    <Box width={[1 / 3]}>
                        <OtherCatTitle>OTHER CATEGORIES</OtherCatTitle>
                        <OtherCategory>About Us</OtherCategory>
                        <OtherCategory>Newsletter</OtherCategory>
                        <OtherCategory>Fitness</OtherCategory>
                        <OtherCategory>Apps</OtherCategory>
                        <OtherCategory>Gaming</OtherCategory>
                        <OtherCategory>Deals</OtherCategory>
                        <OtherCategory>Advertising Inquiries</OtherCategory>
                        <OtherCategory>Licensing and Reprints</OtherCategory>
                        <OtherCategory>Accessibility Statement</OtherCategory>
                    </Box>
                    <Box width={[1 / 3]}>
                        <OtherCategory>Android Central</OtherCategory>
                        <OtherCategory>Windows Central</OtherCategory>
                        <OtherCategory>CrackBerry</OtherCategory>
                        <OtherCategory>Thrifter</OtherCategory>
                        <OtherCategory>CordCutters</OtherCategory>

                        <OtherCategory>TechnoBuffalo</OtherCategory>
                        <OtherCategory>MrMobile</OtherCategory>
                    </Box>
                </Flex>
                <Flex justifyContent={"center"}>
                    <BrightNess>BRIGHTNESS</BrightNess>
                </Flex>
                <Flex alignItems={"center"} p={3} flexWrap="wrap">
                    <Box width={[1 / 3]}>
                        <Facebook color={"black"} marginLeft={"0px"} height={"18px"} width={"18px"} />
                        <Twitter color={"black"} marginLeft={"0px"} height={"18px"} width={"18px"} />
                        <Instagram color={"black"} marginLeft={"0px"} height={"18px"} width={"18px"} />
                        <Youtube color={"black"} marginLeft={"0px"} height={"18px"} width={"18px"} />
                    </Box>
                    <Box width={[1 / 3]} alignItems={"center"} justifyContent={"center"}>
                        <DarkMode>Dark Mode</DarkMode>
                    </Box>
                </Flex>
                <Flex flexWrap="wrap" flexDirection={"row"}>
                    <Text css={ShortLink}>© iGEEKSBLOG</Text>
                    <Text css={ShortLink}>Terms & Conditions</Text>
                    <Text css={ShortLink}>Privacy Policy</Text>
                    <Text css={ShortLink}>Cookie Policy</Text>
                    <Text css={ShortLink}>Careers</Text>
                    <Text css={ShortLink}>Licensing</Text>
                    <Text css={ShortLink}>External Links</Text>
                    <Text css={ShortLink}>Disclosure</Text>
                    <Text css={ShortLink}>Accessibility Statement</Text>
                </Flex>
            </Box>
        </Container>
    );
};
export default SideMenu;
