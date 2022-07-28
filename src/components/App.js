import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {

  const [dataList, setDataList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then((res) => res.json())
    .then((data) => setDataList(data))
  }, [])

  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm dataList={dataList} setDataList={setDataList} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer dataList={dataList} setDataList={setDataList} />
    </>
  );
}

export default App;
