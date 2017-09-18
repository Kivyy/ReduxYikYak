import React, {Component} from 'react';

class Comment extends Component {
  render(){

    const commentAttr = this.props.zoneComments;
    console.log(commentAttr);
    return(
      <div>
        <p style={{fontSize: 20, fontWeight: 400}}>{commentAttr.body}</p>

        <span>{commentAttr.username} </span>
        <span> | </span>
        <span>{commentAttr.timestamp}</span>
        <hr/>
      </div>
    )
  }
}

export default Comment
