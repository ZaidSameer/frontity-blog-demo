import React from "react";
import { Container } from "../../components";
import { Flex, Box, Text, Button } from "rebass";
import { styled, css } from "frontity";
import { Input } from "@rebass/forms";
import { Facebook, Instagram, Youtube, Twitter, GoogleStore, AppleStore } from "../../icon";
const DownloadOurApp = styled.h1`
  font-size: 18px;
  line-height: 1.33;
  text-align: left;
  letter-spacing: 0.36px;
  color: white;
  font-family: Arvo;
  font-weight: 700;
  width: 162px;
`;
const Store = styled.div`
  height: 46px;
  width: 125px;
  background-color: #202126;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  justify-content: center;
  align-items: center;
  display: flex;
`;

const VerticleLine = styled.h1`
  color: white;
  opacity: 0.2;
`;
const HorizontalLine = styled.div`
  border: 1px solid #202126;
`;
const Link = styled.a`
  opacity: 0.56;
  font-family: WorkSans;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.93;
  letter-spacing: 0.3px;
  text-align: left;
  color: rgba(255, 255, 255, 0.56);
  margin: 0 15px 0 15px;
`;
const input = css`
  width: 226px;
  border-radius: 5px;
  background-color: #202126;
  font-family: WorkSans;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: 0.3px;
  text-align: justify;
  color: #565864;
  height: 46px !important;
  outline: none;
`;
const btn = css`
  width: 131px;
  height: 46px;
  border-radius: 5px;
  color: #000;
  background-color: #f3de4f;
  font-family: WorkSans;
  font-size: 14px;
  font-weight: 500;
`;
const Copyright = styled.h1`
  font-family: WorkSans;
  font-size: 15px;
  font-weight: 500;

  letter-spacing: 0.3px;
  text-align: center;
  color: #ffffff;
`;
const StoreLink = css`
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.32px;
  text-align: left;
  margin-left: 10px;
  color: #ffffff;
  font-family: WorkSans;
`;
const center = css`
  align-items: center;
  justify-content: center;
  display: flex;
`;
const Footer = () => {
    return (
        <Container type={"fluid"} bg={"#2b2c32"}>
            <Container bg={"#2b2c32"}>
                <Flex flexWrap="wrap" justifyContent={"center"} py={"35px"}>
                    <Box css={center} p={3} width={[1, 1, 1, 1 / 7]} color="white" bg="primary">
                        <DownloadOurApp>DOWNLOAD OUR APP</DownloadOurApp>
                    </Box>
                    <Box css={center} p={3} width={[1 / 2, 1 / 2, 1 / 2, 1 / 7]}>
                        <Store>
                            <GoogleStore height={"17px"} width={"14px"} />
                            <Text css={StoreLink}>Google Play</Text>
                        </Store>
                    </Box>
                    <Box css={center} p={3} width={[1 / 2, 1 / 2, 1 / 2, 1 / 7]} color="white" bg="primary">
                        <Store>
                            <AppleStore height={"17px"} width={"14px"} fill={"white"} />
                            <Text css={StoreLink}>App Store</Text>
                        </Store>
                    </Box>
                    <Box p={3} width={[1, 1, 1, 1 / 25]}>
                        <VerticleLine>|</VerticleLine>
                    </Box>
                    <Box p={3} width={[1, 1, 1, 1 / 7]} color="white" bg="primary">
                        <DownloadOurApp>SUBSCRIBE TO NEWSLETER</DownloadOurApp>
                    </Box>
                    <Box css={center} p={3} width={[1, 1, 1, 1 / 5]} color="white" bg="secondary">
                        <Input id="email" css={input} name="email" type="email" placeholder="Email" />
                    </Box>
                    <Box css={center} p={3} width={[1, 1, 1, 1 / 7]} color="white" bg="primary">
                        <Button css={btn} mr={2}>
                            SUBSCRIBE
                        </Button>
                    </Box>
                </Flex>
                <HorizontalLine />
                <Flex flexWrap="wrap" justifyContent={"center"} py={"45px"}>
                    <Link>About Us</Link>
                    <Link>Newsletter</Link>
                    <Link>Fitness</Link>
                    <Link>Apps</Link>
                    <Link>Gaming</Link>
                    <Link>Deals</Link>
                    <Link>Advertising inquiries</Link>
                    <Link>Licensing and Repairs</Link>
                </Flex>
            </Container>

            <Container type={"fluid"} bg={"#202126"}>
                <Container bg={"#202126"}>
                    <Flex flexWrap="wrap" justifyContent={"center"} alignItems={"center"} py={"30px"}>
                        <Box
                            p={3}
                            width={[1, 1, 1, 1 / 3]}
                            css={center}
                            color="white"
                            bg="primary"
                            justifyContent={"center"}
                        >
                        </Box>
                        <Box css={center} p={3} width={[1, 1, 1, 1 / 3]} color="white" bg="primary">
                            <Copyright>©iLEEKS 2020. AllRights Reserved</Copyright>
                        </Box>
                        <Box p={3} width={[1, 1, 1, 1 / 3]} color="white" bg="primary" css={center}>
                            <Facebook height={"15px"} width={"15px"} />
                            <Twitter height={"15px"} width={"15px"} />
                            <Instagram height={"15px"} width={"15px"} />
                            <Youtube height={"15px"} width={"15px"} />
                        </Box>
                    </Flex>
                </Container>
            </Container>
        </Container>
    );
};
export default Footer;
