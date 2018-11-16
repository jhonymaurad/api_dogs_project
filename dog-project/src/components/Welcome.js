import React from 'react';
import dogPaw from '../images/dogPaw.png'
export default function Welcome(props){
  return(
    <div className='welcomePage'>
      <img src={dogPaw} className= 'logo'/>
      <h1>FIND A FRIEND</h1>
      <h2>Dog Breed Selector</h2>
    <p>Choosing a dog can be exciting and nerve-wracking at the same
      time. After all, you're committing to care for a living, breathing
      being who will depend on you his entire life! When choosing a
      new dog, so many questions run through your mind: "What kind of
       dog should I get?" "What's the best dog breed for me?" "Will
       he be a good fit with my family?"</p>
    <p> The first step to being a responsible dog owner begins before
       you even bring home a dog. Thoughtfully and seriously assess
       your needs before making a decision, and you'll live long,
       happy lives together. Find a Friend will help you find the right breed
       of dog for you.
     </p>
    </div>
  )
}
