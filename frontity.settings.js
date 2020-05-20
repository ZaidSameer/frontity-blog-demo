const settings = {
    name: "igeekblogs",
    state: {
        frontity: {
            url: "https://test.frontity.io",
            title: "Test Frontity Blog",
            description: "WordPress installation for Frontity development",
        },
    },
    packages: [
        {
            name: "igeeks-theme",
            state: {
                theme: {
                    menu: [["Home", "/"]],
                    featured: {
                        showOnList: false,
                        showOnPost: false,
                    },
                },
            },
        },
        {
            name: "@frontity/wp-source",
            state: {
                source: {
                    api: "https://api.igeeksblog.com/wp-json",
                    params: {
                        per_page: 4,
                    },
                },
            },
        },
        "@frontity/tiny-router",
        "@frontity/html2react",
    ],
};

export default settings;
