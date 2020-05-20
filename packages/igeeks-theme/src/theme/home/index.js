import React, { useEffect } from "react";
import { connect, loadable } from "frontity";
import { beforeSSRCategories } from "../../common/config";
import TopArticleList from "./topArticle";
import ListArticleList from "./listArticle";
import LatestArticleList from "./latestArticle";

const Home = ({ state, themeMode, link }) => {
  const homeHandlerData = state.source.get(state.router.link);

  if (homeHandlerData.isReady) {
    let topArticleData = [];
    let listArticleData = [];
    let topArticleStatus = [];
    let latestArticleData = [];
    let listArticleStatus = [];
    let latestArticleStatus = [];

    Object.values(beforeSSRCategories)
      .filter((category) => category.article === "top")
      .map((category) => {
        topArticleStatus.push(state.source.get(`/category/${category.name}/`).items);
      });

    topArticleStatus.forEach((article) => {
      topArticleData.push(article.slice(0, 3).map(({ type, id }) => state.source[type][id]));
    });

    Object.values(beforeSSRCategories)
      .filter((category) => category.article === "list")
      .map((category) => {
        listArticleStatus.push(...state.source.get(`/category/${category.name}/`).items);
      });
    listArticleData.push(
      ...listArticleStatus.slice(0, 15).map(({ type, id }) => state.source[type][id])
    );

    latestArticleStatus.push(...homeHandlerData.items);
    latestArticleData.push(...latestArticleStatus.map(({ type, id }) => state.source[type][id]));

    return (
      <>
        {topArticleData.length > 0 && <TopArticleList data={topArticleData} />}
        {listArticleData.length > 0 && (
          <ListArticleList data={listArticleData} themeMode={themeMode} />
        )}
        {latestArticleData.length > 0 && (
          <LatestArticleList data={latestArticleData} themeMode={themeMode} />
        )}
      </>
    );
  }
  return <></>;
};

export default connect(Home);
