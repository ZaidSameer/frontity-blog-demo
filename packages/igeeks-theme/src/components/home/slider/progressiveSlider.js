import React from "react";
import { Box, Image } from "rebass";
import ProgressiveImage from "react-progressive-graceful-image";

const ProgressiveSlider = React.forwardRef(({ state, actions, as, ...props }, ref) => {
    const Component = as || Image;
    if (ref)
        props.ref = ref;

    return (
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
                            width={"100%"}
                            height={"100%"}
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
                        width={"100%"}
                        height={"100%"}
                        marginLeft={props.marginLeft}
                    />
                );
            }}
        </ProgressiveImage>
    );
});

export default ProgressiveSlider;
