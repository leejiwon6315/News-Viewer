import React, { useState, useEffect } from "react";
import { Article } from "../Type";
import axios from "axios";
import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and(max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-rught: 1rem;
  }
`;

interface Props {
  category: string;
}

type Articles = Array<Article> | null;

const NewsList: React.FC<Props> = ({ category }) => {
  const [articles, setArticles] = useState<Articles>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const res = await axios.get(
          `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=a47e22c8cee946bcb196a32f3f795e5e`
        );
        setArticles(res.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetch();
  }, [category]);

  if (loading) {
    return <NewsListBlock>Loading...</NewsListBlock>;
  }
  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((elem: any) => (
        <NewsItem article={elem} key={elem.url} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
