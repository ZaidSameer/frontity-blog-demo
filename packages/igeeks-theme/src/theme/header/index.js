import React from "react";
import Container from "../../components/container";
import { Flex, Box } from "rebass";
import { Facebook, Twitter, Instagram, Youtube, Light, Dark, Menu } from "../../icon";
import { css } from "frontity";
import SideMenu from "./menu";
const center = css`
  align-items: center;
  justify-content: center;
  display: flex;
`;
const cntanr = css`
  z-index: 999;
  position: absolute;
  width: 100% !important;
  height: 100px;
`;
const Header = props => {
    const [show, setShow] = React.useState(false);
    return (
        <Container type={"fluid"} backgroundColor={"transparent"} bg={"transparent"} css={cntanr}>
            {show && <SideMenu />}
            <Flex flexWrap="wrap" py={[0, 0, 0, "15px"]}>
                <Box p={3} width={[1 / 3]} color="white" bg="primary" style={{ zIndex: 100 }}>
                    <Menu
                        onClick={() => {
                            setShow(!show);
                        }}
                        width={"25px"}
                        height={"25px"}
                        fill={"white"}
                        style={{
                            zIndex: 199,
                        }}
                    />
                </Box>
                <Box css={center} p={3} width={[1 / 3]} color="white" bg="primary">
                </Box>
                <Box
                    css={css`
            text-align: right;
          `}
                    p={3}
                    width={[1 / 3]}
                    color="white"
                    bg="primary"
                >
                    <Facebook height={"15px"} width={"15px"} />
                    <Twitter height={"15px"} width={"15px"} />
                    <Instagram height={"15px"} width={"15px"} />
                    <Youtube height={"15px"} width={"15px"} />
                    {props.theme == "light"
                        ? (
                            <Dark height={"15px"} width={"15px"} onClick={props.onClick} />
                        )
                        : (
                            <Light height={"15px"} width={"15px"} onClick={props.onClick} />
                        )}
                </Box>
            </Flex>
        </Container>
    );
};
export default Header;
