import styled from "styled-components";

const NewsItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: block;

    img {
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5ren;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

interface Props {
  article: {
    title: string;
    description: string;
    url: any;
    urlToImage: any;
  };
}
const NewsItem: React.FC<Props> = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
      </div>
      <p>{description}</p>
    </NewsItemBlock>
  );
};

export default NewsItem;
