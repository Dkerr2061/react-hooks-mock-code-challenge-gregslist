import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewListingForm from "./NewListingForm";

function App() {
  const [ listing, setListing ] = useState([])
  const [ searchText, setSearchText ] = useState('')

  const filteredText = listing.filter( item => {
    if(searchText === '') {
      return true
    } else {
      return item.description.toLowerCase().includes(searchText.toLowerCase())
    }
  })

  useEffect(() => {
    fetch('http://localhost:6001/listings')
     .then(res => res.json())
     .then(listingsData => setListing(listingsData))
  }, [])

  function deleteButton(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
      .then(res => {
        if(res.ok) {
          setListing((listing) => listing.filter( item => {
            return item.id !== id
          }))
        } else {
          return alert('Cannot delete listing!')
        }
      })
  }

  function onSearchText(event) {
    setSearchText(event.target.value)
  }

  function addItem(newItem) {
    setListing([...listing, newItem])
  }


  return (
    <div className="app">
      <Header onSearchText={onSearchText} searchText={searchText}/>
      <NewListingForm onAddItem={addItem}/>
      <ListingsContainer listings={filteredText} onDeleteButton={deleteButton}/>
    </div>
  );
}

export default App;
