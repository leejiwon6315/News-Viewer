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
  const sampleArticle = {
    title: "title",
    description: "description",
    url: "https://naver.com",
    urlToImage: "https://via.placeholder.com/160",
  };
  return (
    <NewsListBlock>
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
    </NewsListBlock>
  );
};

export default NewsList;
