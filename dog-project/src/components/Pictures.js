import React from 'react';

export default function Pictures(props){
  return(
    <div className='picturesGallery'>
      {props.urls.map(pic => (
        <img src= {pic}/>
      ))}
    </div>
  )
}
