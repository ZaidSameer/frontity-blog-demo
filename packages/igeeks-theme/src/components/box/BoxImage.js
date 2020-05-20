import React from "react";
import { Box, Image } from "rebass";
import ProgressiveImage from "react-progressive-graceful-image";
import { css } from "frontity";

const BoxImage = React.forwardRef(({ state, actions, as, ...props }, ref) => {
    const Component = as || Image;
    if (ref)
        props.ref = ref;

    return props.type === "child"
        ? (
            <ProgressiveImage
                delay={0}
                src={props.image}
                srcSetData={{
                    srcSet: props.srcSet,
                    sizes: props.sizes,
                }}
            >
                {(src, loading, srcSetData) => {
                    if (loading)
                        return <Box ref={ref} bg="#d8d8d8" height="74px" width="104px" />;
                    return (
                        <Component
                            ref={ref}
                            src={src}
                            css={css `
              min-width: unset !important;
            `}
                            {...props}
                            height={["74px", "74px", "74px", "74px"]}
                            width={["104px", "104px", "104px", "104px"]}
                            sizes={srcSetData.sizes}
                            srcSet={srcSetData.srcSet}
                            marginLeft={props.marginLeft}
                        />
                    );
                }}
            </ProgressiveImage>
        )
        : (
            <ProgressiveImage
                delay={0}
                src={props.image}
                srcSetData={{
                    srcSet: props.srcSet,
                    sizes: props.sizes,
                }}
            >
                {(src, loading, srcSetData) => {
                    if (loading) {
                        return (
                            <Box
                                ref={ref}
                                bg="#d8d8d8"
                                marginLeft={props.marginLeft}
                                width={["100%", "100%", "100%", "370px"]}
                                height={["65vw", "65vw", "65vw", "270px"]}
                            />
                        );
                    }
                    return (
                        <Component
                            ref={ref}
                            src={src}
                            {...props}
                            sizes={srcSetData.sizes}
                            srcSet={srcSetData.srcSet}
                            marginLeft={props.marginLeft}
                            width={["100%", "100%", "100%", "370px"]}
                            height={["418px", "418px", "270px", "270px"]}
                        />
                    );
                }}
            </ProgressiveImage>
        );
});

export default BoxImage;
