import { useState, useEffect } from "react";
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

interface Props {}

const NewsList: React.FC<Props> = () => {
  const [articles, setArticles] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "http://newsapi.org/v2/top-headlines?country=kr&apiKey=a47e22c8cee946bcb196a32f3f795e5e"
        );
        setArticles(res.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetch();
  }, []);

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
