export const homeCustomHandler = {
  name: "homeCustomHandler",
  priority: 1,
  pattern: "home-custom-handler",
  func: async ({ route, state, libraries }) => {
    let responsePosts = [];
    const categoriesId = Object.keys(homePageCategories);
    const t0 = new Date().getTime();
    let posts = [];

    try {
      await Promise.all(
        categoriesId.map((id) => {
          if (id === "999") {
            return libraries.source.api
              .get({
                endpoint: `/wp/v2/posts?per_page=${homePageCategories[id].posts}&_fields=id,excerpt,type,link,date_gmt,author,title,content,featured_media,slug`,
              })
              .then((response) => {
                return response.json();
              })
              .then((responsePosts) => {
                let categoryPosts = responsePosts.map((post) => {
                  return {
                    ...post,
                    category: "latest",
                    article: "latest",
                  };
                });
                posts.push(...categoryPosts);
                return responsePosts;
              })
              .catch((err) => console.log(err));
          } else {
            return libraries.source.api
              .get({
                endpoint: `/wp/v2/posts?categories=${id}&per_page=${homePageCategories[id].posts}&_fields=id,type,link,date_gmt,author,title,content,featured_media,slug`,
              })
              .then((response) => {
                return response.json();
              })
              .then((responsePosts) => {
                let categoryPosts = responsePosts.map((post) => {
                  return {
                    ...post,
                    category: homePageCategories[id].name,
                    article: homePageCategories[id].article,
                  };
                });
                posts.push(...categoryPosts);
                return responsePosts;
              })
              .catch((err) => console.log(err));
          }
        })
      );

      const endpoints = [];
      posts.forEach((post) => {
        state.source.data[`${post.slug}/`] = {
          post: post,
          isReady: true,
          isBlogPost: true,
        };
        endpoints.push([
          `/wp/v2/media/${post.featured_media}?_fields=id,source_url,media_details,link`,
          post,
        ]);
        endpoints.push([`/wp/v2/users/${post.author}?_fields=id,name,link`, post]);
      });

      await Promise.all(
        endpoints.map((endpoint) => {
          return libraries.source.api
            .get({
              endpoint: endpoint[0],
            })
            .then((response) => {
              return response.json();
            })
            .then((responseJSON) => {
              if (responseJSON.media_details) {
                const postSrc = responseJSON.source_url;
                let postSrcSet = [];
                for (let [key, value] of Object.entries(responseJSON.media_details.sizes))
                  postSrcSet.push([value.source_url, value.width]);
                endpoint[1]["src"] = postSrc;
                endpoint[1]["srcSet"] = postSrcSet;
              } else {
                endpoint[1]["author"] = responseJSON.name;
              }
            })
            .catch((err) => console.log(err));
        })
      );

      responsePosts = posts.filter((post) => post.src);
      const t1 = new Date().getTime();
      console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
    } catch (error) {
      console.log(error);
    }

    state.source.data["/"] = {
      posts: responsePosts,
      isHomePage: true,
      isReady: true,
    };
  },
};

export const categoryHandler = {
  name: "categoryHandler",
  priority: 2,
  pattern: "category-handler",
  func: async ({ route, state, libraries }) => {
    try {
      const response = await libraries.source.api.get({
        endpoint: "/wp/v2/categories",
      });
      const responseJSON = await response.json();
    } catch (error) {
      console.log(error);
    }
  },
};

export const tagsHandler = {
  name: "tagsHandler",
  priority: 3,
  pattern: "tags-handler",
  func: async ({ route, state, libraries }) => {
    try {
      const response = await libraries.source.api.get({
        endpoint: "/wp/v2/tags",
      });
      const responseJSON = await response.json();
    } catch (error) {
      console.log(error);
    }
  },
};
