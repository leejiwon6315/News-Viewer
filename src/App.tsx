import React from "react";
import { Route } from "react-router-dom";
import NewsPage from "./NewsPage";

const App: React.FC = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
