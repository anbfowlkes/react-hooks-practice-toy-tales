import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer( {dataList, setDataList} ) {
  return (
    <div id="toy-collection">
      {dataList.map((item) => {
        return (<ToyCard
          name={item.name}
          image={item.image} 
          likes={item.likes} 
          key={item.id}
          id={item.id}
          dataList={dataList}
          setDataList={setDataList} />)
      })}
    </div>
  );
}

export default ToyContainer;
