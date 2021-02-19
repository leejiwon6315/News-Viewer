import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const onClickApi = async () => {
    try {
      const response = await axios.get(
        "http://newsapi.org/v2/top-headlines?country=kr&apiKey=a47e22c8cee946bcb196a32f3f795e5e"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="App">
      <div>
        <button onClick={onClickApi}>load</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
