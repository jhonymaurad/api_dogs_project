import React, {Component} from 'react';
import axios from 'axios';
const BASE_URL = "https://dog.ceo/api/breed/hound/images/random";

class RandomPic extends Component{
  constructor(props){
    super(props);
    this.state={
      picUrl:''
    }
  }

async componentDidMount(){
  try {
    const data = await axios.get(`${BASE_URL}`);
    console.log(data);
    this.setState(
      {
        picUrl: data.data.message
      }
    )

  } catch (e) {
    console.log(e);
  }
}
render(){
  return(
    <div>
      <img src= {this.state.picUrl}/>
    </div>
  )
}
}
export default RandomPic;




// export default function PostDog(){
//   return(
//     <h1>post dog info</h1>
//   )
// }
