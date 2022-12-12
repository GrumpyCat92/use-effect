import "./App.css";
import List from "./Components/List";
import { useState } from "react";
import Details from "./Components/Details";

function App() {
  const [items, setItems] = useState([]);
  const [info, setInfo] = useState(null);

  const chooseItem = (info) => {
    setInfo(info);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <List
            items={items}
            setItems={setItems}
            chooseItem={chooseItem}
            active={info?.id}
          />
        </div>
        <div className="col">{info && <Details info={info} />}</div>
      </div>
    </div>
  );
}

export default App;
