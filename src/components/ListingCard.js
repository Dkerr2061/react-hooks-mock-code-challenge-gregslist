import { useState } from "react";
import React from "react";

function ListingCard({listing, deleteButton}) {
  const [ starButton, setStarButton ] = useState(false)

  function handleStarButton() {
    setStarButton(starButton => !starButton)
  }


 
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details" onClick={handleStarButton}>
        {starButton ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={() => deleteButton(listing.id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
