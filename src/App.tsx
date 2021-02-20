import React, { useCallback, useState } from "react";
import NewsList from "./Components/NewsList";
import Categories from "./Components/Categories";

const App: React.FC = () => {
  const [category, setCategory] = useState<string>("all");
  const selectCategory = useCallback(
    (category: string) => setCategory(category),
    []
  );
  return (
    <>
      <Categories selectCategory={selectCategory} />
      <NewsList category={category} />
    </>
  );
};

export default App;
