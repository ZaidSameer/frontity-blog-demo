import React from "react";
import { ThemeProvider } from "emotion-theming";
import { connect, Head, loadable } from "frontity";
import { Box } from "rebass";
import { useDarkMode, GlobalStyle, Nav, Slider } from "../components";
import { lightTheme, darkTheme } from "../common/theme";
import Footer from "./footer";
import Header from "./header";

const BlogPost = loadable(() => import("./post"), {
    fallback: <div>Loading...</div>,
});

const Home = loadable(() => import("./home/"), {
    fallback: <div>Loading...</div>,
});
const Theme = ({ state, libraries, link }) => {
    const [theme, toggleTheme] = useDarkMode();
    const themeMode = theme === "light" ? lightTheme : darkTheme;
    const data = state.source.get(state.router.link);

    return (
        <ThemeProvider theme={themeMode}>
            <Head>
                <meta name="description" content={state.frontity.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <html lang="en" />
            </Head>
            <GlobalStyle />
            <Header
                theme={theme}
                onClick={() => {
                    toggleTheme();
                }}
            />
            {(data.isArchive && (
                <>
                    <Slider />
                    <Nav.Container theme={themeMode}>
                        <Nav.Search />
                        <Box mx="auto" alignItems={"center"} justifyContent={"center"} />
                        <Nav.Item text={"CES 2020"} />
                        <Nav.Item text={"iPhone 11 Pro"} />
                        <Nav.Item text={"Apple Watch 5"} />
                        <Nav.Item text={"iOs 13"} />
                        <Nav.Item text={"ipad Pro"} />
                        <Nav.Item text={"ipad Pro"} />
                        <Nav.Item text={"ipad Pro"} />
                        <Box mx="auto" />
                        <Nav.Add />
                    </Nav.Container>
                    <Home themeMode={themeMode} />
                </>
            ))
                || (data.isPostType && <BlogPost />)}

            <Footer themeMode={themeMode} />
        </ThemeProvider>
    );
};

export default connect(Theme);
