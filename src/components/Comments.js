import React, {Component} from 'react';
import Comment from './Comment'

class Comments extends Component {
  constructor(){
    super()

    this.state = {
      list: [
        {body: 'comment 1' , username: 'user1'},
        {body: 'comment 1' , username: 'user1'},
        {body: 'comment 1' , username: 'user1'},
        {body: 'comment 1' , username: 'user1'}
      ]
    }

  }
  render(){

    const listOfComments = this.state.list.map((comment,i) => {
      return (
        <li><Comment zoneComments={comment} /></li>
      )
    })

    return(
      <div>
        <h2> Comments: Zone 1 </h2>
        <div style={{padding: 12, background:'#f9f9f9', border:'1px solid #ddd'}}>
          <ul style={{listStyleType: 'none'}}>
            {listOfComments}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
