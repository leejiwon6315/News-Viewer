import React from "react";
import axios from "axios";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import usePromise from "../lib/usePromise";

interface Props {
  category: string;
}

const NewsList: React.FC<Props> = ({ category }) => {
  const [loading, res, err] = usePromise(() => {
    const query = category === "all" ? "" : `&category=${category}`;
    return axios.get(
      `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=a47e22c8cee946bcb196a32f3f795e5e`
    );
  }, [category]);

  if (loading) {
    return <NewsListBlock>Loading...</NewsListBlock>;
  }
  if (!res) {
    return null;
  }
  if (err) {
    return <NewsListBlock>ERROR!!</NewsListBlock>;
  }

  const { articles } = res.data;

  return (
    <NewsListBlock>
      {articles.map((elem: any) => (
        <NewsItem article={elem} key={elem.url} />
      ))}
    </NewsListBlock>
  );
};

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

export default NewsList;
