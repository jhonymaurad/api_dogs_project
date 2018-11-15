import React from 'react';

export default function NavBar(props){
  return(
    <nav>
      <button onClick={() => props.handleViewChange('welcome')}>HOME</button>
      <button onClick={() => props.handleViewChange('byBreeds')}>Search by Breed</button>
      <button onClick={() => props.handleViewChange('postDog')}>Images</button>
    </nav>
  )
}
