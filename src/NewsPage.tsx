import React from "react";
import Categories from "./Components/Categories";
import NewsList from "./Components/NewsList";

interface Props {
  match: any;
}
const NewsPage: React.FC<Props> = ({ match }) => {
  const category = match.params.category || "all";

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
