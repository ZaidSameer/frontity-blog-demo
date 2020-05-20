import React from "react";
import { loadable } from "frontity";
import { connect } from "frontity";

const Slider = loadable(() => import("./slider"), {
    fallback: <div>Loading...</div>,
});

const SliderWrap = ({ state }) => {
    let repeats = 20;
    const homeHandlerData = state.source.get(state.router.link);

    if (homeHandlerData.isReady) {
        const posts = homeHandlerData.items.map(({ type, id }) => state.source[type][id]);
        let returncall = Array.apply(null, { length: repeats * posts.length }).map(function(e, i) {
            return posts[i % posts.length];
        });

        return <>{homeHandlerData.isReady && <Slider data={returncall} />}</>;
    }
    return <></>;
};

export default connect(SliderWrap);
