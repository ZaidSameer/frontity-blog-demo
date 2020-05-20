export function getSrcSetHandler(srcSet) {
    const returnSrcSet = srcSet.reduce(
        (final, current, index, array) =>
            final.concat(`${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`),
        "",
    ) || null;
    return returnSrcSet;
}
function getSrcSet(media) {
    const srcset = Object.values(media.media_details.sizes)
        // Get the url and width of each size.
        .map(item => [item.source_url, item.width])
        // Recude them to a string with the format required by `srcset`.
        .reduce(
            (final, current, index, array) =>
                final.concat(`${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`),
            "",
        ) || null;
    return srcset;
}
export function getMediaAttributes(state, id) {
    const media = state.source.attachment[id];
    if (!media)
        return {};
    const srcSet = getSrcSet(media);
    return srcSet;
    // return {
    //   id,
    //   alt: media.title.rendered,
    //   src: media.source_url,
    //   srcSet,
    // };
}

export function getPostData(state) {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    return { ...post, isReady: data.isReady, isPage: data.isPage };
}

export function formatPostData(state, post) {
    return {
        id: post.id,
        author: getPostAuthor(state, post),
        publishDate: post.date,
        title: post.title.rendered,
        categories: getPostCategories(state, post),
        tags: getPostTags(state, post),
        link: post.link,
        featured_media: getMediaAttributes(state, post.featured_media),
        content: post.content.rendered,
        excerpt: post.excerpt.rendered,
    };
}

export function getPostCategories(state, post) {
    const allCategories = state.source.category;
    const categories = post.categories && post.categories.map(catId => allCategories[catId]);
    return categories ? categories.filter(Boolean) : [];
}

export function getPostAuthor(state, post) {
    return state.source.author[post.author];
}

export function getPostTags(state, post) {
    const allTags = state.source.tag;
    const tags = post.tags && post.tags.map(tagId => allTags[tagId]);
    return tags ? tags.filter(Boolean) : [];
}
