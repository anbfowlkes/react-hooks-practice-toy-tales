import React from "react";

function ToyCard( {name, image, likes, dataList, setDataList, id} ) {

  const handleLikeClick = () => {
    console.log('like button clicked')
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      body:JSON.stringify({
        likes: likes+1
      }),
      headers: {
        'Content-type': 'application/json',
      }
    })
    .then((res) => res.json())
    .then((newItem) => setDataList(dataList.map((item) => {
      return (item.id === id ? newItem : item)
    })))
  }

  const handleDeleteClick = (e) => {
    console.log('donation')
    console.log(e.target)
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE'
    })
    .then(() => setDataList(dataList.filter((item) => {
      return (item.id === id ? null : item)
    })))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLikeClick} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDeleteClick} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
