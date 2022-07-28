import React from "react";

function ToyForm( {dataList, setDataList} ) {

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
    console.log(e.target[0].value)
    let obj = {
      name: e.target[0].value,
      image: e.target[1].value,
      likes: 0
    }
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(obj)
    })
    .then((res) => res.json())
    .then((newItem) => setDataList([...dataList, newItem]))
  }

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
