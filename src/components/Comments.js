import React, {Component} from 'react'
import Comment from './Comment'
import superagent from 'superagent'
import {APIManager} from '../utility/index'

class Comments extends Component {
  constructor(){
    super()
    this.state = {
      comment: {
        username: '',
        body: ''
      },
      list: []
    }

    this.submitComment = this.submitComment.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  componentDidMount(){
    APIManager.get('/api/comment', null, (err, response) => {
      if(err){
        alert("ERROR:" + err.message)
        return
      }
      this.setState({
        list: response.results
      })
    })
  }

  submitComment(e){
    e.preventDefault();
    let updatedList = Object.assign([], this.state.list)
    updatedList.push(this.state.comment)
    this.setState({
      list: updatedList
    })
  }

  updateUsername(e){
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['username'] = e.target.value

    this.setState({
      comment: updatedComment
    })
  }

  updateBody(e){
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['body'] = e.target.value

    this.setState({
      comment: updatedComment
    })
  }

  render(){

    const listOfComments = this.state.list.map((comment,i) => {
      return (
        <li key={i}><Comment key={i} zoneComments={comment} /></li>
      )
    })

    return(
      <div>
        <h2> Comments: Zone 1 </h2>
        <div style={{padding: 12, background:'#f9f9f9', border:'1px solid #ddd'}}>
          <ul style={{listStyleType: 'none'}}>
            {listOfComments}
          </ul>

          <input onChange={this.updateUsername} className="form-control" type="text" placeholder="username"/><br />
          <input onChange={this.updateBody} className="form-control" type="text" placeholder="comment"/><br />
          <button onClick={this.submitComment} className="btn btn-info"> Submit Comment </button>


        </div>
      </div>
    )
  }
}

export default Comments
