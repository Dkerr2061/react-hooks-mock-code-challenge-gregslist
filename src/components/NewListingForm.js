import { useState } from "react"

function NewListingForm({ onAddItem }) {
  const [newItem, setNewItem] = useState({
    description: '',
    image: '',
    location: ''
  })

  function handleSubmit(event) {
    event.preventDefault()
    fetch('http://localhost:6001/listings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "description": newItem.description,
        "image": newItem.image,
        "location": newItem.location
      })
    })
      .then(res => res.json())
      .then(newItemData => onAddItem(newItemData))
  }

  function postItem(event) {
      setNewItem({...newItem, [event.target.name]: event.target.value})
  }

  return (
    <div className="new-item-listing">
      <h2>Post New Items</h2>
      <form onSubmit={handleSubmit}>
        <input 
        onChange={postItem} 
        type="text" 
        name="description" 
        placeholder="Item Description"
        value={newItem.description}
        />
        <input 
        type="text" 
        name="image" 
        placeholder="Image"
        onChange={postItem}
        value={newItem.image}
        />
        <input 
        type="text" 
        name="location" 
        placeholder="Location"
        onChange={postItem}
        value={newItem.location}
        />
        <button>Add Listing</button>
      </form>
    </div>
  )
}


export default NewListingForm;