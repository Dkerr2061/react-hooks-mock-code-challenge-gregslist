import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDeleteButton}) {

  const listItems = listings.map(listing => {
    return <ListingCard key={listing.id} listing={listing} deleteButton={onDeleteButton}/>
  })
  return (
    <main>
      <ul className="cards">
        {listItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
