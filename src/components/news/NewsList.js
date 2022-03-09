import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 3rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

//title
//description
//url
//urlToImage
function NewsList({ category }) {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getNews() {
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;

        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=jp${query}&apiKey=43d5a714ed2c4d278fed993e35150805`
        );
        setArticles(res.data.articles);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getNews();
  }, [category]);

  if (loading) return <NewsListBlock>Loading..</NewsListBlock>;

  if (!articles) return null;

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
}

export default NewsList;
